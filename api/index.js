import Express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mergedTypeDefs from "./graphql/typeDefs/index.js";
import mergedResolvers from "./graphql/resolvers/index.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_DB;
console.log("Conectando.. ao MongoDB...");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log("Erro de conexão com MongoDB: ", error.message);
  });

const start = async () => {
  const app = Express();
  const httpServer = http.createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/api/graphql", // Alterado para corresponder ao caminho configurado no Vercel
  });

  const schema = makeExecutableSchema({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });

  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();

  app.use(
    "/api/graphql", // Alterado para corresponder ao caminho configurado no Vercel
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
    Express.json(),
    expressMiddleware(server, {
      context: ({ req, res }) => ({ req, res }),
    })
  );

  const PORT = 5000;

  httpServer.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
};

start();

// app.use(cors());

// app.get("/api/hello", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

// app.listen(8000, () => {
//   console.log("Servidor rodando na porta 8000");
// });

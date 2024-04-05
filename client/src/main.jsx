import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.jsx";
import "./index.css";

// uri: "https://movie-rho-snowy.vercel.app/api/graphql",
const client = new ApolloClient({
  uri: "http://localhost:5000/api/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

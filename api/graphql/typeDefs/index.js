import { mergeTypeDefs } from "@graphql-tools/merge";
import movieTypeDef from "../typeDefs/movie.typeDef.js";
import commentTypeDef from "./comment.typeDef.js";
import userTypeDef from "./user.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
  movieTypeDef,
  commentTypeDef,
  userTypeDef,
]);

export default mergedTypeDefs;

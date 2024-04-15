import { mergeTypeDefs } from "@graphql-tools/merge";
import movieTypeDef from "../typeDefs/movie.typeDef.js";
import commentTypeDef from "./comment.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([movieTypeDef, commentTypeDef]);

export default mergedTypeDefs;

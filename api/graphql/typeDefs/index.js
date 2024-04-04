import { mergeTypeDefs } from "@graphql-tools/merge";
import movieTypeDef from "../typeDefs/movie.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([movieTypeDef]);

export default mergedTypeDefs;

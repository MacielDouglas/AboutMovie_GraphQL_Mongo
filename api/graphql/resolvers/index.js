import { mergeResolvers } from "@graphql-tools/merge";
import movieResolver from "./movie.resolver.js";

const mergedResolvers = mergeResolvers([movieResolver]);

export default mergedResolvers;

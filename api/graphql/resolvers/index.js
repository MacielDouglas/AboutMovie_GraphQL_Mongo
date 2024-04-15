import { mergeResolvers } from "@graphql-tools/merge";
import movieResolver from "./movie.resolver.js";
import commentResolver from "./comment.resolver.js";

const mergedResolvers = mergeResolvers([movieResolver, commentResolver]);

export default mergedResolvers;

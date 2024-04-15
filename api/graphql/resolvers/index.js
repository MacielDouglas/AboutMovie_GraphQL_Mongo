import { mergeResolvers } from "@graphql-tools/merge";
import movieResolver from "./movie.resolver.js";
import commentResolver from "./comment.resolver.js";
import userResolver from "./user.resolver.js";

const mergedResolvers = mergeResolvers([
  movieResolver,
  commentResolver,
  userResolver,
]);

export default mergedResolvers;

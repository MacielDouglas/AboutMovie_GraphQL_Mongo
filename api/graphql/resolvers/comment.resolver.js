import Comment from "../../models/comments.models.js";

const commentResolver = {
  Query: {
    comment: async (_, { id, year }) => {
      try {
        const startDateOfYear = new Date(year, 0, 1);
        const comments = await Comment.find({
          movie_id: id,
          date: { $gte: startDateOfYear },
        })
          .sort({ date: -1 })
          .exec();

        if (!comments || comments.length === 0) {
          throw new Error("Comments not found");
        }
        return comments;
      } catch (error) {
        console.error("Error getting comments:", error);
        throw new Error(`Error getting comments: ${error.message}`);
      }
    },
  },
};

export default commentResolver;

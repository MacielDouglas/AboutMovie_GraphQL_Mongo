import Comment from "../../models/comments.models.js";

const commentResolver = {
  Query: {
    comment: async (_, { id, year }) => {
      try {
        // Crie uma data de início do ano com base no ano fornecido
        const startDateOfYear = new Date(year, 0, 1);

        // Encontre os comentários com data igual ou superior à data de início do ano
        const comments = await Comment.find({
          movie_id: id,
          date: { $gte: startDateOfYear },
        })
          .sort({ date: -1 })
          .exec();

        // Verifique se há comentários encontrados
        if (!comments || comments.length === 0) {
          throw new Error("Comments not found");
        }

        // Retorne os comentários encontrados
        return comments;
      } catch (error) {
        // Log de erros
        console.error("Error getting comments:", error);
        // Lançar um erro com a mensagem de erro
        throw new Error(`Error getting comments: ${error.message}`);
      }
    },
  },
};

export default commentResolver;

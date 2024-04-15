import User from "../../models/movie.models.js";

const userResolver = {
  Query: {
    login: async (_, { username, password }) => {
      try {
        const user = await User.findOne({
          username: username,
          password: password,
        }).exec();

        if (!user) {
          throw new Error("User not found!");
        }
        return user;
      } catch (error) {
        throw new Error(`Error getting user: ${error.message}`);
      }
    },
  },
};

export default userResolver;

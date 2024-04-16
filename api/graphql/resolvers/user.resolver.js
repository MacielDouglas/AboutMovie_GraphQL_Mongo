import User from "../../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userResolver = {
  Query: {
    login: async (_, { email, password }, { res }) => {
      try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          throw new Error("Email or password is invalid!");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Email or password is invalid!");
        }

        const token = jwt.sign(
          { userId: user.id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        const { password: _, ...userWithoutPassword } = user._doc;
        res.cookie("access_token", token, {
          httpOnly: true,
        });

        return {
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token: token,
        };
      } catch (error) {
        throw new Error(`${error.message}`);
      }
    },
    logoutUser: (_, __, { res }) => {
      try {
        res.clearCookie("access_token");
        return {
          success: true,
          message: "user logged out, successfully!!!",
        };
      } catch (error) {
        throw new Error(`Error logout: ${error.message}`);
      }
    },
  },

  Mutation: {
    registerUser: async (_, { username, email, password }, { res }) => {
      try {
        const existingUserByUsername = await User.findOne({ username }).exec();
        if (existingUserByUsername) {
          throw new Error("Username already exists!");
        }

        const existingUserByEmail = await User.findOne({ email }).exec();
        if (existingUserByEmail) {
          throw new Error("Email already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar um novo usuário
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });

        await newUser.save();

        return {
          username: newUser.username,
          email: newUser.email,
        };
      } catch (error) {
        throw new Error(`Error registering user: ${error.message}`);
      }
    },
  },
};

export default userResolver;

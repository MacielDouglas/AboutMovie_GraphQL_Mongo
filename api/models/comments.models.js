import mongoose from "mongoose";
import Movie from "./movie.models.js";

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  movie_id: {
    type: Schema.Types.ObjectId,
    ref: Movie,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", commentSchema);

export default Comment;

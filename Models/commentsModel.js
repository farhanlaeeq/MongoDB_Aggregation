const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    movie_id: {
      type: mongoose.Schema.ObjectId,
    },
    text: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    // Specify the collection name explicitly
    collection: "comments",
  }
);

const comments = mongoose.model("comments", commentsSchema);

module.exports = comments;

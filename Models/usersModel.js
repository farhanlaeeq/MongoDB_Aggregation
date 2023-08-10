const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: Number,
    },
    password: {
      type: Number,
    },
  },
  {
    // Specify the collection name explicitly
    collection: "users",
  }
);

const users = mongoose.model("users", usersSchema);

module.exports = users;

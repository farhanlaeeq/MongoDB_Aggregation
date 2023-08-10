const mongoose = require("mongoose");

const sessionsSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    jwt: {
      type: Number,
    },
  },
  {
    // Specify the collection name explicitly
    collection: "sessions",
  }
);

const sessions = mongoose.model("sessions", sessionsSchema);

module.exports = sessions;

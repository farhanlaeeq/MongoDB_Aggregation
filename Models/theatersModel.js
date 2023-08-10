const mongoose = require("mongoose");

const theatersSchema = new mongoose.Schema(
  {
    theaterId: {
      type: Number,
    },
    location: {
      address: {
        street1: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        zipcode: {
          type: String,
        },
      },
      geo: {
        type: {
          type: String,
        },
        coordinates: {
          type: [Number],
        },
      },
    },
  },
  {
    // Specify the collection name explicitly
    collection: "theaters",
  }
);

const theaters = mongoose.model("theaters", theatersSchema);

module.exports = theaters;

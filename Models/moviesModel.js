const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    year: {
      type: Number,
    },
    runtime: {
      type: Number,
    },
    released: {
      type: Date,
    },
    poster: {
      type: String,
    },
    plot: {
      type: String,
    },
    fullplot: {
      type: String,
    },
    lastupdated: {
      type: Date,
    },
    type: {
      type: String,
    },
    directors: {
      type: [String],
    },
    imdb: {
      rating: {
        type: Number,
      },
      votes: {
        type: Number,
      },
      id: {
        type: Number,
      },
    },
    cast: {
      type: [String],
    },
    countries: {
      type: [String],
    },
    genres: {
      type: [String],
    },
    tomatoes: {
      viewer: {
        rating: {
          type: Number,
        },
        numReviews: {
          type: Number,
        },
      },
      lastUpdated: {
        type: Date,
      },
    },
    num_mflix_comments: {
      type: Number,
    },
  },
  {
    // Specify the collection name explicitly
    collection: "movies",
  }
);

const movies = mongoose.model("movies", moviesSchema);

module.exports = movies;

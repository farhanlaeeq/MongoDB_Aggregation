const mongoose = require("mongoose");

const embedded_moviesSchema = new mongoose.Schema(
  {
    plot: {
      type: String,
    },
    genres: {
      type: [String],
    },
    runtime: {
      type: Number,
    },
    rated: {
      type: String,
    },
    cast: {
      type: [String],
    },
    num_mflix_comments: {
      type: Number,
    },
    poster: {
      type: String,
    },
    title: {
      type: String,
    },
    lastupdated: {
      type: Date,
    },
    languages: {
      type: [String],
    },
    released: {
      type: Date,
    },
    directors: {
      type: [String],
    },
    writers: {
      type: [String],
    },
    awards: {
      wins: {
        type: Number,
      },
      nominations: {
        type: Number,
      },
      text: {
        type: String,
      },
    },
    year: {
      type: Number,
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
    countries: {
      type: [String],
    },
    type: {
      type: String,
    },
    tomatoes: {
      viewer: {
        rating: {
          type: Number,
        },
        numReviews: {
          type: Number,
        },
        meter: {
          type: Number,
        },
      },
      dvd: {
        type: Date,
      },
      critic: {
        rating: {
          type: Number,
        },
        numReviews: {
          type: Number,
        },
        meter: {
          type: Number,
        },
      },
    },
    plot_embedding: {
      type: [Number],
    },
  },
  {
    // Specify the collection name explicitly
    collection: "embedded_movies",
  }
);

const embedded_movies = mongoose.model(
  "embedded_movies",
  embedded_moviesSchema
);

module.exports = embedded_movies;

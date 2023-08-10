const express = require("express");
const CommentsController = require("../Controllers/CommentsController");

const router = express.Router();

router.get("/api/get_comments", CommentsController.Getcomments);
router.get("/api/get_movie_comments", CommentsController.GetMoviecomment);

module.exports = router;

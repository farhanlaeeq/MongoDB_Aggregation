const express = require("express");
const CommentsController = require("../Controllers/CommentsController");

const router = express.Router();

router.get("/api/get_comments", CommentsController.Getcomments);
router.get("/api/get_movie_comments", CommentsController.GetMoviecomment);
router.get(
  "/api/get_sorted_comments_by_date",
  CommentsController.GetSortedCommentsByDate
);

module.exports = router;

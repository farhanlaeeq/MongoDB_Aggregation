const comment = require("../Models/commentsModel");

exports.Getcomments = async (req, res, next) => {
  try {
    const data = await comment.find();
    res.json({
      message: "comment logged in successfully",
      IsSuccess: true,
      Status_Code: 200,
      Data: data,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};

exports.GetMoviecomment = async (req, res, next) => {
  try {
    const MovieID = req.query.q;
    const data = await comment.find({
      movie_id: MovieID,
    });
    res.json({
      message: "comment logged in successfully",
      IsSuccess: true,
      Status_Code: 200,
      Data: data,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};

exports.GetSortedCommentsByDate = async (req, res, next) => {
  try {
    const Limit = await req.query.limit;
    const data = await comment.aggregate([
      { $sort: { date: 1 } },
      { $limit: Number(Limit) },
    ]);
    res.json({
      message: "comment logged in successfully",
      IsSuccess: true,
      Status_Code: 200,
      Limit: Limit,
      Data: data,
    });
  } catch (error) {
    res.json({
      message: "Server Error!",
      IsSuccess: false,
      Status_Code: 500,
      Data: error,
    });
  }
};

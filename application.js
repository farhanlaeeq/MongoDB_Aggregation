const express = require("express");

const commentsRoutes = require("./Routes/commentsRoutes");

const aplication = express();
aplication.use(express.json({ limit: "3mb" }));
aplication.use(express.urlencoded({ extended: true, limit: "10kb" }));

aplication.use("/", commentsRoutes);

aplication.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: "Route Not Found",
    data: null,
  });
});

//SERVER
module.exports = aplication;

const express = require("express");

const commentsRoutes = require("./Routes/commentsRoutes");

const aplication = express();
aplication.use(express.json({ limit: "3mb" }));
aplication.use(express.urlencoded({ extended: true, limit: "10kb" }));

aplication.use("/", commentsRoutes);

aplication.get("*", (req, res) => {
  res.json({
    success: true,
    status: 200,
    message: "Successfully connected to the server",
    data: null,
  });
});

//SERVER
module.exports = aplication;

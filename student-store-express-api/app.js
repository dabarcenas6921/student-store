// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const storeRouter = require("./routes/store");
const app = express();
const { NotFoundError } = require("./utils/errors");

app.use(morgan("tiny"));
app.use(express.json());
app.use("/store", storeRouter);

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

//404 Handler
app.use((req, res, next) => {
  return next(new NotFoundError());
});

//Generic error handling
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong in the application";

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;

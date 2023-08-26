const express = require("express");
require("dotenv").config();
const { init } = require("./db");
const { router } = require("./routes");
const {
  requestLoggerMiddleware,
  errorLoggerMiddleware,
  logger,
} = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 5000;

init().then(() => {
  app.listen(PORT, () => {
    logger.log("info", `Expense backend is up and running on port ${PORT}`);
  });
});

app.use(express.json());
app.use(requestLoggerMiddleware);
app.use(router);
app.use(errorLoggerMiddleware);

module.exports = { app };

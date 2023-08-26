const express = require("express");
const app = express();
const { expenseRouter } = require("./expenseRouter");
const { authRouter } = require("./authRouter");

app.use("/auth", authRouter);
app.use("/expenses", expenseRouter);

module.exports = { router: app };

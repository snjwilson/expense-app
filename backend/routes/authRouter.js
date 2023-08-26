const express = require("express");
const { userService } = require("../services/user");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { user } = req.body;
    const response = await userService.signup(user);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { user } = req.body;
    const response = await userService.login(user);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = { authRouter: router };

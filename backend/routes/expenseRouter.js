const express = require("express");
const { expenseService } = require("../services");
const router = express.Router();

// fetch expenses for a page
router.get("/", async (req, res, next) => {
  try {
    const { page = 1 } = req.query;
    const expenses = await expenseService.getAll(page);
    res
      .status(200)
      .json({ status: "success", message: "Fetched expenses!", expenses });
  } catch (error) {
    next(error);
  }
});

// fetch one expense
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const expenseFound = await expenseService.getOne(id);
    res.status(200).json({
      status: "success",
      message: `Fetched expense ${id}!`,
      expense: expenseFound,
    });
  } catch (error) {
    next(error);
  }
});

// create one expense
router.post("/", async (req, res, next) => {
  try {
    const { expense } = req.body;
    const message = await expenseService.add(expense);
    res.status(201).json({
      status: "success",
      message,
    });
  } catch (error) {
    next(error);
  }
});

// update one expense
router.put("/", async (req, res, next) => {
  try {
    const { expense } = req.body;
    const updatedExpense = await expenseService.update(expense);
    res.status(200).json({
      status: "success",
      message: `Updated expense ${updatedExpense.id}!`,
      expense: updatedExpense,
    });
  } catch (error) {
    next(error);
  }
});

// delete one expense
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await expenseService.delete(id);
    res.status(200).json({
      status: "success",
      message,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { expenseRouter: router };

const { Expense } = require("../db");

const expenseService = {
  add: async (expense) => {
    const newExpense = new Expense(expense);
    await newExpense.save();
    return `Expense ${newExpense._id} saved to database!`;
  },
  getAll: async (page) => {
    return await Expense.find({})
      .skip((page - 1) * 10)
      .limit(10)
      .lean();
  },
  getOne: async (id) => {
    return await Expense.findOne({ _id: id }).lean();
  },
  update: async (expense) => {
    const expenseFound = await Expense.findOne({ _id: expense._id });
    expenseFound.title = expense.title;
    expenseFound.amount = expense.amount;
    expenseFound.tags = expense.tags;
    await expenseFound.save();
    return expenseFound;
  },
  delete: (id) => {
    return Expense.deleteOne({ _id: id })
      .then(() => {
        return `Deleted expense ${id}`;
      })
      .catch((error) => `Unable to delete due to error - ${error.message}`);
  },
};

module.exports = { expenseService };

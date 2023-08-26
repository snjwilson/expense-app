const mongoose = require("mongoose");
const { logger, errorLogger } = require("../middlewares/logger");

async function init() {
  try {
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const db = process.env.MONGO_DB;
    const uri = `mongodb+srv://${username}:${password}@cluster0.ln2pukk.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(uri, { dbName: db });
    logger.log("info", "Successfully connected to mongoDB");
  } catch (error) {
    errorLogger.log("error", error.message);
  }
}

module.exports = { init };

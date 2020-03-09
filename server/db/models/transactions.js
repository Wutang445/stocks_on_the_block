const Sequelize = require("sequelize");
const db = require("../db");

const Transactions = db.define("transaction", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

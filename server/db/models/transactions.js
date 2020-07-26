const Sequelize = require("sequelize");
const db = require("../db");

const Transactions = db.define("transaction", {
  isTransaction: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Transactions;

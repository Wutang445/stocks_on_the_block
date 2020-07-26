const Sequelize = require("sequelize");
const db = require("../db");

const StockPurchase = db.define("stockPurchase", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = StockPurchase;

const Sequelize = require("sequelize");
const db = require("../db");

const Stocks = db.define("stock", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

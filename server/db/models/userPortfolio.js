const Sequelize = require("sequelize");
const db = require("../db");

const userPortfolio = db.define("userPortfolio", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = userPortfolio;

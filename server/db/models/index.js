const User = require("./users");
const Transactions = require("./transactions");
const Stock = require("./stocks");
const StockPurchase = require("./stockPurchase");
const UserPortfolio = require("./userPortfolio");

User.hasMany(Transactions);
Transactions.belongsTo(User);

Transactions.belongsToMany(Stock, { through: StockPurchase });
Stock.belongsToMany(Transactions, { through: StockPurchase });

User.belongsToMany(Stock, { through: StockPurchase });
Stock.belongsToMany(User, { through: StockPurchase });

module.exports = { User, Transactions, Stock, StockPurchase, UserPortfolio };

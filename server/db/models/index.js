const User = require("./users");
const Transaction = require("./transactions");
const Stock = require("./stocks");
const StockPurchase = require("./stockPurchase");
const UserPortfolio = require("./userPortfolio");

User.hasMany(Transaction);
Transaction.belongsTo(User);

Transaction.belongsToMany(Stock, { through: StockPurchase });
Stock.belongsToMany(Transaction, { through: StockPurchase });

User.belongsToMany(Stock, { through: UserPortfolio });
Stock.belongsToMany(User, { through: UserPortfolio });

module.exports = { User, Transaction, Stock, StockPurchase, UserPortfolio };

const User = require("./users");
const Transaction = require("./transactions");
const Stock = require("./stocks");
const StockPurchase = require("./stockPurchase");

User.hasMany(Transaction);
Transaction.belongsTo(User);

Transaction.belongsToMany(Stock, { through: StockPurchase });
Stock.belongsToMany(Transaction, { through: StockPurchase });

module.exports = { User, Transaction, Stock };

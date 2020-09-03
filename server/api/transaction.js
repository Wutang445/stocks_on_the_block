const router = require("express").Router();
const { Order, Transactions, Stock } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const userTransactionId = await Transactions.findOne({
      where: {
        userId: req.user.id,
        isTransaction: true,
      },
      attributes: ["id"],
    });

    res.json(userTransactionId.id);
  } catch (error) {
    next(error);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const userTransaction = await Transactions.findAll({
      include: [{ model: Stock }],
      where: {
        userId: req.params.userId,
        isTransaction: true,
      },
    });

    res.json(userTransaction);
  } catch (error) {
    next(error);
  }
});

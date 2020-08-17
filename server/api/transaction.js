const router = require("express").Router();
const { Order, Transaction, Stock } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const userTransactionId = await Transaction.findOne({
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
    const userTransaction = await Transaction.findOne({
      include: [{ model: Stock }, { attributes: ["id"] }],
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

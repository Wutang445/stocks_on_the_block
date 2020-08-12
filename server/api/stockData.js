const router = require("express").Router();
const { IEXCloudClient } = require("node-iex-cloud");
const apiKey = process.env.API_KEY;
const fetch = require("node-fetch");
const { Stock } = require("../db/models");
const symbols = [
  "AAPL",
  "GOOGL",
  "MSFT",
  "AMZN",
  "F",
  "WMT",
  "INTC",
  "NVDA",
  "PFE",
  "XOM",
  "BAC",
];

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "Tpk_cd90eaec093349e4a755d588e5f97f74",
  version: "stable",
});

router.get("/", async (req, res, next) => {
  try {
    const stockdata = await iex
      .batchSymbols(
        "AAPL",
        "GOOGL",
        "MSFT",
        "AMZN",
        "F",
        "WMT",
        "INTC",
        "NVDA",
        "PFE",
        "XOM",
        "BAC"
      )
      .intradayPrices();

    res.send(stockdata);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get("/price", async (req, res, next) => {
  try {
    const stockprice = await iex
      .batchSymbols(
        "AAPL",
        "GOOGL",
        "MSFT",
        "AMZN",
        "F",
        "WMT",
        "INTC",
        "NVDA",
        "PFE",
        "XOM",
        "BAC"
      )
      .price();

    // console.log(Stock);

    symbols.forEach(async (symbol) => {
      await Stock.update(
        { price: stockprice[symbol].price },
        {
          where: {
            name: symbol,
          },
        }
      );
    });

    // const prices = await Stock.findAll({
    //   attributes: ["name", "price"],
    // });
    res.send(stockprice);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

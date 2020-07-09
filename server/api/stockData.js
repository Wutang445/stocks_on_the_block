const router = require("express").Router();
const { IEXCloudClient } = require("node-iex-cloud");
const apiKey = process.env.API_KEY;
const fetch = require("node-fetch");

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
        "CVX",
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

module.exports = router;

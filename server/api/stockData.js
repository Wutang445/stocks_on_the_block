const router = require("express").Router();
const { IEXCloudClient } = require("node-iex-cloud");
const apiKey = process.env.API_KEY;
const fetch = require("node-fetch");

const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: apiKey,
  version: "stable",
});

router.get("/", async (req, res, next) => {
  const stockData = await iex.batchSymbols("googl, amazn, fb").price();
  res.send(stockData);
  try {
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

const router = require("express").Router();
const alphavantage = require("alphavantage");
const apiKey = process.env.API_KEY;
const alpha = alphavantage({ key: apiKey });

router.get("/", async (req, res, next) => {
  try {
    const data = await alpha.data.intraday("msft", "compact");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

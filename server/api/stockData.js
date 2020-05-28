const router = require("express").Router();
const alphavantage = require("alphavantage");
const apiKey;
const alpha = alphavantage({ key: apiKey });

router.get("/", async (req, res, next) => {
  try {
    console.log(process.env);
    const data = await alpha.data.intraday("msft", "compact");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

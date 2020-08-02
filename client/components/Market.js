import React from "react";
import MarketData from "./MarketData";
import UserMarketPortfolio from "./UserMarketPortfolio";

const Market = (props) => {
  return (
    <div>
      <h3>Welcome. Here are the stocks listed for today.</h3>

      <MarketData />

      <UserMarketPortfolio />
    </div>
  );
};

export default Market;

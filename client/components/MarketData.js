import React from "react";
import { getStockData } from "../store/stockData";
import { getStockPrice } from "../store/stockPrice";
import { connect } from "react-redux";
import {
  StockTable,
  StockHeaders,
  StockCell,
} from "./styledcomponents/StockTable";

// Hard Coded Data for now
const tableHeaders = [
  "Company Name",
  "Symbol",
  "Date",
  "High",
  "Low",
  "Open",
  "Close",
  "Average",
  "Current Prices",
];

const companyName = {
  AAPL: "Apple Inc.",
  GOOGL: "Alphabet Inc.",
  MSFT: "Microsoft Corporation",
  AMZN: "Amazon.com, Inc.",
  F: "Ford Motor Company",
  WMT: "Walmart Inc.",
  INTC: "Intel Corporation",
  NVDA: "Nvidia Corporation",
  PFE: "Pfizer Inc.",
  XOM: "Exxon Mobile Corporation",
  BAC: "Bank of America Corp",
};

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

// Component
const MarketData = (props) => {
  React.useEffect(() => {
    props.getStockData();
    props.getStockPrice();
    const interval = setInterval(() => {
      props.getStockData();
      props.getStockPrice();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <StockTable>
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <StockHeaders>{header}</StockHeaders>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.stockData[symbols[0]] &&
            props.stockData[symbols[0]][`intraday-prices`]
              ? symbols.map((symbol) => (
                  <tr
                    key={props.stockData[symbol][`intraday-prices`][0].volume}
                  >
                    <StockCell>{companyName[symbol]}</StockCell>
                    <StockCell>{symbol}</StockCell>
                    <StockCell>
                      {props.stockData[symbol][`intraday-prices`][0].date}
                    </StockCell>
                    <StockCell>
                      ${props.stockData[symbol][`intraday-prices`][0].high}
                    </StockCell>
                    <StockCell>
                      ${props.stockData[symbol][`intraday-prices`][0].low}
                    </StockCell>
                    <StockCell>
                      ${props.stockData[symbol][`intraday-prices`][0].open}
                    </StockCell>
                    <StockCell>
                      ${props.stockData[symbol][`intraday-prices`][0].close}
                    </StockCell>
                    <StockCell>
                      ${props.stockData[symbol][`intraday-prices`][0].average}
                    </StockCell>
                    <StockCell>${props.stockPrice[symbol].price}</StockCell>
                  </tr>
                ))
              : ""}
          </tbody>
        </StockTable>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    stockData: state.stockData,
    stockPrice: state.stockPrice,
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStockData: () => dispatch(getStockData()),
    getStockPrice: () => dispatch(getStockPrice()),
  };
};

export default connect(mapState, mapDispatch)(MarketData);

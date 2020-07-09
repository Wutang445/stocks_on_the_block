import React from "react";
import { getStockData } from "../store/stockData";
import { connect } from "react-redux";

const Portfolio = (props) => {
  const tableHeaders = [
    "Company Name",
    "Symbol",
    "Date",
    "High",
    "Low",
    "Open",
    "Close",
    "Average",
  ];

  const symbols = [
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
    "BAC",
  ];

  React.useEffect(() => {
    props.getStockData();
    const interval = setInterval(() => {
      props.getStockData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h3>Welcome. Here are the stocks listed for today.</h3>

      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.stockData[symbols[0]] &&
            symbols.map((symbol) => (
              <tr>
                <td>{symbol}</td>
                <td>{symbol}</td>
                <td>{props.stockData[symbol][`intraday-prices`][0].date}</td>
                <td>{props.stockData[symbol][`intraday-prices`][0].high}</td>
                <td>{props.stockData[symbol][`intraday-prices`][0].low}</td>
                <td>{props.stockData[symbol][`intraday-prices`][0].open}</td>
                <td>{props.stockData[symbol][`intraday-prices`][0].close}</td>
                <td>{props.stockData[symbol][`intraday-prices`][0].average}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    stockData: state.stockData,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStockData: () => dispatch(getStockData()),
  };
};
export default connect(mapState, mapDispatch)(Portfolio);

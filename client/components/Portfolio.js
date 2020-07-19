import React from "react";
import styled, { css } from "styled-components";
import { getStockData } from "../store/stockData";
import { getStockPrice } from "../store/stockPrice";
import { connect } from "react-redux";

const StockTable = styled.table`
  text-align: center;
  width: 100%;
`;

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
    "Current Prices",
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
    props.getStockPrice();
    const interval = setInterval(() => {
      props.getStockData();
      props.getStockPrice();
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h3>Welcome. Here are the stocks listed for today.</h3>

      <StockTable>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.stockData[symbols[0]] &&
          props.stockData[symbols[0]][`intraday-prices`]
            ? symbols.map((symbol) => (
                <tr key={props.stockData[symbol][`intraday-prices`][0].volume}>
                  <td>{symbol}</td>
                  <td>{symbol}</td>
                  <td>{props.stockData[symbol][`intraday-prices`][0].date}</td>
                  <td>${props.stockData[symbol][`intraday-prices`][0].high}</td>
                  <td>${props.stockData[symbol][`intraday-prices`][0].low}</td>
                  <td>${props.stockData[symbol][`intraday-prices`][0].open}</td>
                  <td>
                    ${props.stockData[symbol][`intraday-prices`][0].close}
                  </td>
                  <td>
                    ${props.stockData[symbol][`intraday-prices`][0].average}
                  </td>
                  <td>${props.stockPrice[symbol].price}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </StockTable>
    </div>
  );
};

const mapState = (state) => {
  return {
    stockData: state.stockData,
    stockPrice: state.stockPrice,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStockData: () => dispatch(getStockData()),
    getStockPrice: () => dispatch(getStockPrice()),
  };
};
export default connect(mapState, mapDispatch)(Portfolio);

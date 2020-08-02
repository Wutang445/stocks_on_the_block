import React from "react";
import styled, { css } from "styled-components";
import { getStockData } from "../store/stockData";
import { getStockPrice } from "../store/stockPrice";
import { connect } from "react-redux";
import user from "../store/user";

const StockTable = styled.table`
  text-align: center;
  width: 100%;
  background: black;
`;

const StockHeaders = styled.th`
  font-size: 30px;
  color: #39ff14;
`;

const StockCell = styled.td`
  font-size: 30px;
  color: #39ff14;
  font-family: "Roboto", sans-serif;
`;

const Market = (props) => {
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

      <div>
        {props.user.id ? (
          <div>
            <h1>{props.user.email}'s Portfolio Overview</h1>
            <table>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Current Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stock Name</td>
                  <td>Stock Symbol</td>
                  <td># of stocks owned</td>
                  <td>Price</td>
                  <td>
                    <input></input>
                    <button>Purchase</button>
                    <input></input>
                    <button>Sell</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h1>
            You are currently only able to view stock metrics for the day. For
            further functionality involving buying and selling, please sign up
            or log in with an existing account
          </h1>
        )}
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
export default connect(mapState, mapDispatch)(Market);

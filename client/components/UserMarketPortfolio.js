import React from "react";
import { connect } from "react-redux";

const UserMarketPortfolio = (props) => {
  return (
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
          further functionality involving buying and selling, please sign up or
          log in with an existing account
        </h1>
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    stockPrice: state.stockPrice,
    user: state.user,
  };
};

export default connect(mapState, null)(UserMarketPortfolio);

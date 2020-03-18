import React from "react";
import { getStockData } from "../store/stockData";
import { connect } from "react-redux";

const Portfolio = props => {
  const [stockData, setStockData] = React.useState("");
  console.log(props);
  const handleClick = () => {
    props.getStockData();
  };

  return (
    <div>
      <h1>Welcome, User. Here are your listed stocks for today</h1>

      <button onClick={handleClick}>Test</button>
    </div>
  );
};

const mapState = state => {
  return {
    stockData: state.stockData
  };
};

const mapDispatch = dispatch => {
  return {
    getStockData: () => dispatch(getStockData())
  };
};
export default connect(mapState, mapDispatch)(Portfolio);

import React from "react";
import { getStockData } from "../store/stockData";
import { connect } from "react-redux";

const Portfolio = (props) => {
  const [stockData, setStockData] = React.useState("");
  console.log(props.stockData["Time Series (1min)"]);
  // const handleClick = () => {
  //   props.getStockData();
  // };

  React.useEffect(() => {
    props.getStockData();
  }, [stockData]);

  return (
    <div>
      <h1>Welcome. Here are the stocks listed for today.</h1>

      {/* <button onClick={handleClick}>Test</button> */}
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

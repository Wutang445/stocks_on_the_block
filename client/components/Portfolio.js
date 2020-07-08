import React from "react";
import { getStockData } from "../store/stockData";
import { connect } from "react-redux";

const Portfolio = (props) => {
  const [stockData, setStockData] = React.useState("");

  const handleClick = () => {
    setStockData(props.stockData);
  };

  React.useEffect(() => {
    props.getStockData();
  }, []);
  return (
    <div>
      <h3>Welcome. Here are the stocks listed for today.</h3>
      <button onClick={handleClick}>Test</button>
      {stockData.AAPL && <h1>{stockData.AAPL.price}</h1>}
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

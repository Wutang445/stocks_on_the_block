import axios from "axios";

const GET_STOCK_PRICE = "GET_STOCK_PRICE";

const gotStockPrice = (stockPrice) => ({ type: GET_STOCK_PRICE, stockPrice });

// Thunk creator

export const getStockPrice = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/stockData/price");
    dispatch(gotStockPrice(res.data));
  } catch (error) {
    console.error(error);
  }
};

// Reducer

export default function (state = {}, action) {
  switch (action.type) {
    case GET_STOCK_PRICE:
      return action.stockPrice;
    default:
      return state;
  }
}

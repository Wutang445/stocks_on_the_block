import axios from "axios";

const GET_STOCK_DATA = "GET_STOCK_DATA";

const gotStockData = (stockData) => ({ type: GET_STOCK_DATA, stockData });

// Thunk creator

export const getStockData = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/stockData");
    dispatch(gotStockData(res.data));
  } catch (error) {
    console.error(error);
  }
};

// Reducer

export default function (state = {}, action) {
  switch (action.type) {
    case GET_STOCK_DATA:
      return action.stockData;
    default:
      return state;
  }
}

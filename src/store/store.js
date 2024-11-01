import { createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer.js";

const reducer = combineReducers({
  cart: cartReducer,
});

export const store = createStore(reducer);

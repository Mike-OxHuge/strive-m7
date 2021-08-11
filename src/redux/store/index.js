import { createStore } from "redux";
import mainReducer from "../reducers";

export const initialState = {
  // jobs
  jobs: [],
  // cart
  cart: {
    jobs: [],
  },
  // user
  user: {
    firstName: "",
  },
};

export const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// 3 arguments:
// reducer
// initialState
// any enhancer

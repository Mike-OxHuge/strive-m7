import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import cartReducer from "../reducers/fav";
import userReducer from "../reducers/users";
import jobsReducer from "../reducers/getjobs";

export const initialState = {
  // jobs
  jobs: {
    jobsArr: [],
    jobsQuery: "",
    isLoading: false,
  },
  // cart
  cart: {
    jobs: [],
  },
  // user
  user: {
    firstName: "",
  },
};

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  jobs: jobsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
// 3 arguments:
// reducer
// initialState
// any enhancer

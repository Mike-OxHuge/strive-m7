import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import cartReducer from "../reducers/fav";
import userReducer from "../reducers/users";
import jobsReducer from "../reducers/getjobs";
import weatherReducer from "../reducers/weather";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
  weather: {
    query: "",
    error: "",
    isLoading: false,
    weather: {},
  },
};

const persistConfig = {
  key: "root",
  storage,
};

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  jobs: jobsReducer,
  weather: weatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(configureStore);
// 3 arguments:
// reducer
// initialState
// any enhancer

export { configureStore, persistor };

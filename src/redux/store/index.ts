import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import cartReducer from "../reducers/fav";
import jobsReducer from "../reducers/getjobs";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { iredux } from "../../itypes";

export const initialState: iredux = {
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

const persistConfig = {
  key: "root",
  storage,
};

const bigReducer = combineReducers({
  cart: cartReducer,
  jobs: jobsReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

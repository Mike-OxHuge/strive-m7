import { initialState } from "../store";

const favReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    }
    case "REMOVE_FROM_CART": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default favReducer;

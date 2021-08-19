import { initialState } from "../store";

// add items to the cart
// remove items from the cart
// set the user name

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //   state.cart.products.push(action.payload)
      // SUPER WRONG!!
      // a reducer is a pure function
      // YOU CANNOT MUTATE YOUR ARGUMENTS

      return {
        // every time you return an object out of a case
        // you're managing the whole state
        ...state,
        cart: {
          ...state.cart,
          // the book to add is going to be the payload of the action
          // action.payload -> the book to add
          jobs: [...state.cart.jobs, action.payload],
          // products: state.cart.products.concat(action.payload)
          // FORBIDDEN METHODS!!
          // push, pop, splice
        },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          // the payload in this action will be the index of the book to remove
          jobs: state.cart.jobs.filter((b, i) => i !== action.payload),
        },
      };

    case "GET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return state;
  }
};

export default mainReducer;

import { initialState } from "../store";

const getJobs = (state = initialState.jobs, action) => {
  switch (action.type) {
    case "GET_JOBS": {
      return {
        ...state,
        jobsArr: action.payload,
      };
    }
    case "GET_JOBS_ERROR": {
      console.log("error has occured");
      return state;
    }
    case "SET_QUERY": {
      return {
        ...state,
        jobsQuery: action.payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default getJobs;

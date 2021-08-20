import { initialState } from "../store";

const getWeather = (state = initialState.weather, action) => {
  switch (action.type) {
    case "SET_WEATHER_QUERY":
      return { ...state, query: action.payload };
    case "SET_LOADING_WEATHER":
      return { ...state, isLoading: action.payload };
    case "GET_WEATHER":
      return { ...state, weather: action.payload };
    case "GET_WEATHER_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default getWeather;

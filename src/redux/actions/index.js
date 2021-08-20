export const addToCartAction = (job) => ({
  type: "ADD_TO_CART",
  payload: job,
});

export const removeFromCartAction = (index) => ({
  type: "REMOVE_FROM_CART",
  payload: index,
});

// export const getJobsAction = (jobs) => ({
//   type: "GET_JOBS",
//   payload: jobs,
// });

export const setQueryAction = (query) => ({
  type: "SET_QUERY",
  payload: query,
});

export const setLoadingAction = (status) => ({
  type: "SET_LOADING",
  payload: status,
});

export const getJobsAction = () => {
  return async (dispatch, getState) => {
    try {
      const query = getState().jobs.jobsQuery;
      let resp = await fetch(
        `https://remotive.io/api/remote-jobs?search=${query}`
      );
      if (resp.ok) {
        let jobs = await resp.json();
        dispatch({
          type: "GET_JOBS",
          payload: jobs,
        });
        dispatch(setLoadingAction(false));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setWeatherQueryAction = (query) => ({
  type: "SET_WEATHER_QUERY",
  payload: query,
});

export const getWeather = (weather) => ({
  type: "GET_WEATHER",
  payload: weather,
});

export const setLoadingWeather = (state) => ({
  type: "SET_LOADING_WEATHER",
  payload: state,
});

export const setError = (state) => ({
  type: "GET_WEATHER_ERROR",
  payload: state,
});

export const getWeatherAction = () => {
  return async (dispatch, getState) => {
    try {
      const query = getState().weather.query;
      let resp = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=48f8b6edb12a8f2b73d312dd5282b888`);
      if (resp.ok) {
        let weather = await resp.json();
        dispatch(getWeather(weather));
        dispatch(setLoadingWeather(false));
      }
    } catch (error) {
      dispatch(setError(error));
      console.log(error);
    }
  };
};

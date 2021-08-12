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

export const addToCartAction = (job) => ({
  type: "ADD_TO_CART",
  payload: job,
});

export const removeFromCartAction = (index) => ({
  type: "REMOVE_FROM_CART",
  payload: index,
});

export const getJobsAction = (jobs) => ({
  type: "GET_JOBS",
  payload: jobs,
});

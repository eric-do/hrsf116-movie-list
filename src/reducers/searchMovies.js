var searchMoviesReducer = (state = [], action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'UPDATE_RESULTS':
      return action.results;
    default:
      return state;
  }
};

export default searchMoviesReducer;
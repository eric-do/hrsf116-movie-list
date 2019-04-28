var updateMoviesReducer = (state = [], action) => {
  if (!action) {
    return state;
  }
 
  switch (action.type) {
    case 'UPDATE_MOVIES':
      return action.movies;
    default:
      return state;
  }
};

export default updateMoviesReducer;
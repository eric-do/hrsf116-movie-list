var updateWatchedReducer = (state = {}, action) => {
  if (!action) { return state; }

  switch (action.type) {
    case 'UPDATE_WATCHED':
      return action.watched;
    default:
      return state;
  }
}
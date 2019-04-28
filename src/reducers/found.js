var foundReducer = (state = true, action) => {
  if (!action) {
    throw "Invalid action";
  }

  switch (action.type){
    case 'FOUND_STATUS':
      return action.bool;
    default: 
      return state;
  }
}

export default foundReducer;
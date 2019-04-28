import { createStore } from 'redux';  
import updateResults from './updateResults.js';
import updateFound from './updateFound.js';

var searchHandler = (e) => {
  return (dispatch, getState) => {
    e.preventDefault();
    var search = document.getElementById("search").value;
    var searchArr = getState().movies.filter(movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    dispatch(updateResults(searchArr));
    dispatch(updateFound(searchArr.length > 0));
  }
}

export default searchHandler;
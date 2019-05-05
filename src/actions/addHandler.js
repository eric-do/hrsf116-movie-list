import { createStore } from 'redux';  
import updateMovies from './updateMovies.js';
import updateResults from './updateResults.js';
import updateFound from './updateFound.js';

 var addHandler = (e) => {
   return (dispatch, getState) => {
    e.preventDefault();
    var title = document.getElementById("add-title").value;
    var newMovie = { title };
    var movieList = getState().movies.concat(newMovie);
    dispatch(updateMovies(movieList)); 
    dispatch(updateResults(movieList));
    dispatch(updateFound(true));
   }
 }

 export default addHandler;
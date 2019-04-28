import { combineReducers } from 'redux';
import results from './searchMovies.js';
import movies from './updateMovies.js';
import found from './found.js';

var rootReducer = combineReducers({results, movies, found});

export default rootReducer;
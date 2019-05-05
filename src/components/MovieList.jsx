import MovieEntry from './MovieEntry.js';

var MovieList = (props) => (
  <div>
    <div id="movie-list" className="movie-list" style={props.found === false ? {display: "none"} : {}}>
      {
        props.movies.map(movie => (
          <MovieEntry key={movie.title.toString()} 
                      movie={movie} 
                      watched={props.watched[movie.title]}
                      watchedHandler={props.watchedHandler}/>
        )) 
      }
    </div>
    <div id="no-results" style={props.found === true ? {display: "none"} : {}}>
      No movie by that name found
    </div>
  </div>
);

export default MovieList;
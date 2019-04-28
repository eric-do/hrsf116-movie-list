import MovieEntry from './MovieEntry.js';

var MovieList = ({movies, found}) => (
  <div>
    <div id="movie-list" className="movie-list">
      {
        movies.map(movie => (
          <MovieEntry key={movie.title.toString()} movie={movie} style={found === false ? {display: "none"} : {}} />
        )) 
      }
    </div>
    <div id="no-results" style={found === true ? {display: "none"} : {}}>
      No movie by that name found
    </div>
  </div>
);

export default MovieList;
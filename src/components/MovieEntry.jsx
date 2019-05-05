import Watched from './Watched.js';

var MovieEntry = (props) => (
  <div className="movie-entry" className="movie-entry">
  {props.movie.title}
  <Watched watched={props.watched} title={props.movie.title} watchedHandler={props.watchedHandler} />
  </div>
);

export default MovieEntry;
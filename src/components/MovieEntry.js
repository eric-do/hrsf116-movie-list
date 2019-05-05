var MovieEntry = (props) => (
  <div className="movie-entry" className="movie-entry">
    <p className="title">{props.movie.title}</p>
    <button type="button" className="watched-button">Watched</button>
  </div>
);

export default MovieEntry;
import MovieListContainer from '../containers/MovieListContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import AddMovieContainer from '../containers/AddMovieContainer.js'

var App = () => (
      <div>
        <div className="navbar">MovieList</div>
        <AddMovieContainer />
        <SearchContainer />
        <MovieListContainer />
      </div>
);

export default App;
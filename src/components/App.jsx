import movies from '../data/exampleData.js';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      found: true
    }
  }

  componentDidMount() {
    console.log(`Components mounted.`);
  }

  setMoviesState(movieList) {
    this.setState({
      movies: movieList,
      found: movieList.length > 0 ? true : false
    });
  }

  /* ADD FUNCTIONALITY */
  addMovie(title) {
    // Input: movie title
    // Get array of movies from movies state
    // Create new movie object
    // Use concat to merge and return new array
    // Call setMoviesState with new array
  }

  /* SEARCH FUNCTIONALITY */
  searchMovies(search) {
    // Input: search term
    // Return: nothing
    // Receive a search term
    // Filter movie list by titles with partial/full match
    //   Note: can use title.indexOf(search) >= 0
    // Pass filtered array to setMoviesState
    var searchArr = movies.filter(movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    this.setMoviesState(searchArr);
  }

  searchHandler(e) {
    // Input: event generated from form submit
    // Prevent default action for event
    // Get value from search field
    // Call search movie with search param
    e.preventDefault();
    var search = document.getElementById("search").value;
    this.searchMovies(search);
  }

  render() {
    return (
      <div>
        <div className="navbar">MovieList</div>
        <AddMovie />
        <Search submitHandler={this.searchHandler.bind(this)} />
        <MovieList movies={this.state.movies} found={this.state.found} />
      </div>
    );
  }
}

export default App;
import movies from '../data/exampleData.js';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      results: [],
      found: true
    };
  }

  componentDidMount() {
    console.log(`Components mounted.`);
    this.setState({
      results: this.state.movies
    });
  }

  /* ADD FUNCTIONALITY */
  addMovie(title) {
    // Input: movie title
    // Get array of movies from movies state
    // Create new movie object
    // Use concat to merge and return new array
    // Set both movies and results state to new array,
    //  i.e. users should see their search refreshed when adding new movies
    var newMovie = { title: title };
    var movieList = this.state.movies.concat(newMovie);
    this.setState({
      movies: movieList,
      results: movieList
    });
  }

  addHandler(e) {
    e.preventDefault();
    var title = document.getElementById("add-title").value;
    this.addMovie(title);
  }

  /* SEARCH FUNCTIONALITY */
  searchMovies(search) {
    // Input: search term
    // Return: nothing
    // Receive a search term
    // Filter movie list by titles with partial/full match
    //   Note: can use title.indexOf(search) >= 0
    // Set state with search results
    var searchArr = this.state.movies.filter(movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    this.setState({
      results: searchArr,
      found: searchArr.length > 0 ? true : false
    });
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
        <AddMovie addHandler={this.addHandler.bind(this)} />
        <Search submitHandler={this.searchHandler.bind(this)} />
        <MovieList movies={this.state.results} found={this.state.found} />
      </div>
    );
  }
}

export default App;
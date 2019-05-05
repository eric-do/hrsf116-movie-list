import movies from '../data/exampleData.js';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    var watched = movies.reduce((acc, movie) => {
      acc[movie.title] = false;      
      return acc;
    }, {});

    this.state = {
      movies: movies,
      results: movies,
      view: "toWatch",
      found: true, 
      watched: watched
    };
  }

  componentDidMount() {
    console.log(`Components mounted.`);
    // this.setState({
    //   results: this.state.movies
    // });
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


  /* Watched Handler */
  watchedHandler(e, title) {
    // Inputs: event, title
    // Objective: update watched state
    // Prevent event default
    // Update watched status for movie title to be its current opposite
    // Upate state of watched object

    e.preventDefault();
    var watched = Object.assign(this.state.watched);
    watched[title] = !this.state.watched[title];
    this.setState({
      watched: watched
    })
  }

  /* View Handler */
  viewHandler(view) {
    if (view === "watched") {
      var filteredArr = this.state.movies.filter(movie => {
        return this.state.watched[movie.title] === true;
      });
    } else if (view === "toWatch") {
      var filteredArr = this.state.movies.filter(movie => {
        return this.state.watched[movie.title] === false;
      });
    }
    this.setState({
      view: view,
      results: filteredArr
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">MovieList</div>
        <AddMovie addHandler={this.addHandler.bind(this)} />
        <button className="btn-view" onClick={(e) => this.viewHandler("watched")}>Watched</button>
        <button className="btn-view" onClick={(e) => this.viewHandler("toWatch")}>To Watch</button>
        <Search submitHandler={this.searchHandler.bind(this)} viewHandler={this.viewHandler.bind(this)} />
        <MovieList movies={this.state.results} 
                   found={this.state.found} 
                   watched={this.state.watched}
                   watchedHandler={this.watchedHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
import { connect } from 'react-redux';
import MovieList from '../components/MovieList.js';

const mapStateToProps = state => ({
  movies: state.results,
  found: state.found
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
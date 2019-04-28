import { connect } from 'react-redux';
import Search from '../components/Search.js';
import searchHandler from '../actions/searchHandler.js';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  searchHandler: (e) => dispatch(searchHandler(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
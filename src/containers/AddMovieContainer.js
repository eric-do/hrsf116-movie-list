import { connect } from 'react-redux';
import AddMovie from '../components/AddMovie.js';
import addHandler from '../actions/addHandler.js';

var mapStateToProps = state => ({

});

var mapDispatchToProps = dispatch => ({
  addHandler: (e) => dispatch(addHandler(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
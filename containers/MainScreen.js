import { connect } from 'react-redux';
import Main from '../components/screens/Main';
import { fetchMovie } from '../redux/actions/searchAction';

const mapState = state => ({
  isLoading: state.search.isLoading
});

const mapDispatch = {
   fetchMovie
};

export default connect(
  mapState,
  mapDispatch
)(Main);

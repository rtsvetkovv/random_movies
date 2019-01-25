import { connect } from 'react-redux';
import { Movie } from '../components/screens/Movie';
import { fetchMovie, moreMovie } from '../redux/actions/searchAction';

const mapState = state => ({
  movie: state.search.movie
});

const mapDispatch = {
  fetchMovie,
  moreMovie
};

export const MovieScreen = connect(
  mapState,
  mapDispatch
)(Movie);

import { connect } from 'react-redux';
import Movie from '../components/screens/Movie';

const mapState = state => ({
  movie: state.search.movie
});

export default connect(mapState)(Movie);

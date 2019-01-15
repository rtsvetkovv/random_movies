import axios from 'axios';

import {
  FETCH_MOVIE_REQUEST_START,
  FETCH_MOVIE_REQUEST_SUCCESS,
  FETCH_MOVIE_REQUEST_ERROR
} from '../actionTypes';
import { Actions } from 'react-native-router-flux';

const searchStart = () => ({
  type: FETCH_MOVIE_REQUEST_START
});

const searchSuccess = payload => ({
  type: FETCH_MOVIE_REQUEST_SUCCESS,
  payload
});

const searchError = error => ({
  type: FETCH_MOVIE_REQUEST_ERROR,
  error
});

export const fetchMovie = page => dispatch => {
  dispatch(searchStart());
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4499d31c1d8a60d9dad7b581321a53b2&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    )
    .then(response => {
      dispatch(searchSuccess(response.data));
      Actions.movie();
    })
    .catch(error => searchError(error));
};

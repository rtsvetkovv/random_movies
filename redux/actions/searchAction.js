import axios from 'axios';

import {
  FETCH_MOVIE_REQUEST_START,
  FETCH_MOVIE_REQUEST_SUCCESS,
  FETCH_MOVIE_REQUEST_ERROR
} from '../actionTypes';
import { Actions } from 'react-native-router-flux';

export const searchStart = () => ({
  type: FETCH_MOVIE_REQUEST_START
});

export const searchSuccess = payload => ({
  type: FETCH_MOVIE_REQUEST_SUCCESS,
  payload
});

export const searchError = () => ({
  type: FETCH_MOVIE_REQUEST_ERROR
});

export const fetchMovie = () => dispatch => {
  dispatch(searchStart());
  axios
    .get(
      'https://api.themoviedb.org/3/discover/movie?api_key=4499d31c1d8a60d9dad7b581321a53b2&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
    )
    .then(response => {
      Actions.movie();
      dispatch(searchSuccess(response.data));
    })
    .catch(error => console.warn(error));
};

import axios from 'axios';
import { BASE_URL } from "react-native-dotenv"

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
      `${BASE_URL}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    )
    .then(response => {
      dispatch(searchSuccess(response.data));
      Actions.movie();
    })
    .catch(error => searchError(error));
};

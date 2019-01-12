import {
  FETCH_MOVIE_REQUEST_START,
  FETCH_MOVIE_REQUEST_SUCCESS,
  FETCH_MOVIE_REQUEST_ERROR
} from '../actionTypes';

export const searchStart = () => ({
  type: FETCH_MOVIE_REQUEST_START
});

export const searchSuccess = () => ({
  type: FETCH_MOVIE_REQUEST_SUCCESS
});

export const searchError = () => ({
  type: FETCH_MOVIE_REQUEST_ERROR
});

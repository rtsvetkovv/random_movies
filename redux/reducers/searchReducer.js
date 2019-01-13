import {
  FETCH_MOVIE_REQUEST_START,
  FETCH_MOVIE_REQUEST_SUCCESS,
  FETCH_MOVIE_REQUEST_ERROR
} from '../actionTypes';

const initialState = {
  movie: [],
  isLoading: false,
  error: false
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_MOVIE_REQUEST_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
        error: false
      };
    case FETCH_MOVIE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

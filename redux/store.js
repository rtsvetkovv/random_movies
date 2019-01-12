import { createStore, combineReducers, applyMiddleware } from 'redux';
import { search } from './reducers/searchReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  search
});

export const store = createStore(reducers, applyMiddleware(thunk));

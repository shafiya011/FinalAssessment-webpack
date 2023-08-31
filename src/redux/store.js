import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import CombineReducer from './combineReducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
  CombineReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

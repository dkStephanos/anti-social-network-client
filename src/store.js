import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import postReducer from './reducers/postReducer';
import postFormReducer from './reducers/postFormReducer';
import userReducer from './reducers/userReducer';
import connectionReducer from './reducers/connectionReducer';

const reducers = combineReducers({
  postReducer,
  postFormReducer,
  userReducer,
  connectionReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

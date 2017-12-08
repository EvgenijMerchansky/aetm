import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { logger } from 'redux-logger'; // if you want look for actions

import userReducer from './Reducers/userReducer';

const middleware = applyMiddleware(thunk);
const store = createStore(userReducer, composeWithDevTools(middleware));

export default store;

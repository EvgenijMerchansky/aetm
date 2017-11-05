import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from './Reducers/userReducer';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(userReducer, composeWithDevTools(middleware));

export default store;

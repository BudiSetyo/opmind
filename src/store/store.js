import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';

const logger = createLogger();
const enhancers = applyMiddleware(reduxThunk, logger);

const reduxStore = createStore();

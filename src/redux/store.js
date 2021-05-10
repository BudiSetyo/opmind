import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {persistStore} from 'redux-persist';

import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';

// import rootReducer from './reducers/root';

import {authReducer} from './reducers/auth';

const logger = createLogger();
const enhancers = applyMiddleware(reduxThunk, logger);
const reducers = combineReducers({authReducer});

const reduxStore = createStore(reducers, enhancers);

// const pStore = persistStore(store);

// const store = {reduxStore, pStore};

export default reduxStore;

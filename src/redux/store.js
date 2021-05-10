import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';

import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers/root';

const logger = createLogger();
const enhancers = applyMiddleware(reduxThunk, logger);

const reduxStore = createStore(rootReducer, enhancers);

const pStore = persistStore(store);

const store = {reduxStore, pStore};

export default store;

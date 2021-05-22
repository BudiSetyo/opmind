import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {authReducer} from './auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({authReducer});

const PersistReducer = persistReducer(persistConfig, rootReducer);

export default PersistReducer;

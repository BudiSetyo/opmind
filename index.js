import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store from './src/redux/store';
// import ReduxStore from './src/redux/store';

const AppContainer = () => (
  <Provider store={store.reduxStore}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>
  // <Provider store={ReduxStore}>
  //   <App />
  // </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);

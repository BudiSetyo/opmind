import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';

// import {reduxStore, pStore} from './src/redux/store';

// const AppContainer = () => {
// <Provider store={reduxStore}>
//   <PersistGate loading={null} persistor={pStore}>
//     <App />
//   </PersistGate>
// </Provider>;
// <App />;
// };

const AppContainer = () => (
  // <Provider store={reduxStore}>
  //   <PersistGate loading={null} persistor={pStore}>
  //     <App />
  //   </PersistGate>
  // </Provider>
  <App />
);

AppRegistry.registerComponent(appName, () => AppContainer);

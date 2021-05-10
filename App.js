import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import Reset from './src/screens/reset/Reset';
import Otp from './src/screens/reset/Otp';
import Change from './src/screens/reset/Change';
import Success from './src/screens/reset/Success';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Change" component={Change} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

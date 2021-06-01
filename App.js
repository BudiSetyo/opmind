import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

// import Notification from './src/screens/notification/Notif';

import Splash from './src/screens/splash';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import Reset from './src/screens/reset/Reset';
import Otp from './src/screens/reset/Otp';
import Change from './src/screens/reset/Change';
import Success from './src/screens/reset/Success';

import HomeUser from './src/screens/home/user/User';
import HomeFasilitator from './src/screens/home/fasilitator/Fasilitator';
import Profile from './src/screens/profile/Profile';

import ActivityUser from './src/screens/activity/user/User';
import UserCourse from './src/screens/activity/user/course/Course';
import DetailCourse from './src/screens/activity/user/details/Detail';

import ActivityFasilitator from './src/screens/activity/fasilitator/Fasilitator';
import FasilitatorCourse from './src/screens/activity/fasilitator/course/Course';
import DetailFasilitator from './src/screens/activity/fasilitator/details/Detail';

import Chat from './src/screens/chats/Chat';
import Single from './src/screens/chats/single/Single';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChatRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
};

const ActivityFasilitatorRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainActivity"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainActivity" component={ActivityFasilitator} />
      <Stack.Screen name="MyClass" component={FasilitatorCourse} />
      <Stack.Screen name="ClassDetail" component={DetailFasilitator} />
    </Stack.Navigator>
  );
};

const ActivityUserRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainActivity"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainActivity" component={ActivityUser} />
      <Stack.Screen name="MyClass" component={UserCourse} />
      <Stack.Screen name="ClassDetail" component={DetailCourse} />
    </Stack.Navigator>
  );
};

const HomeRoutes = () => {
  const authReducer = useSelector(state => state.authReducer);
  const role = authReducer.user?.data?.role;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5784BA',
        inactiveTintColor: '#ADA9BB',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={role === 1 ? HomeUser : HomeFasilitator}
      />
      <Tab.Screen
        name="Activity"
        component={role === 1 ? ActivityUserRoutes : ActivityFasilitatorRoutes}
      />
      <Tab.Screen name="Chat" component={ChatRoutes} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Change" component={Change} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

const App = props => {
  const {isLogin} = props.authReducer;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogin === true ? (
          <>
            <Stack.Screen name="Home" component={HomeRoutes} />
          </>
        ) : (
          <Stack.Screen name="Login" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectApp = connect(mapStateToProps)(App);

export default ConnectApp;

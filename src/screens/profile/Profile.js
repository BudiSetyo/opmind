import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

// import {connect} from 'react-redux';
// import {loginHandler} from '../../redux/actions/auth';

import Header from './Header';
import Account from './Account';
import Settings from './Settings';
import Help from './Help';

const Profile = props => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer}>
        <Account />
        <View style={{paddingVertical: 5}} />
        <Settings />
        <View style={{paddingVertical: 5}} />
        <Help navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

// const mapStateToProps = state => {
//   // console.log(state.authReducer);
//   return {
//     authReducer: state.authReducer,
//   };
// };

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    backgroundColor: '#E6EDF6',
  },
});

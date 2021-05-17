import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

// import {loginHandler} from '../../redux/actions/auth';

import Header from './Header';
// import {connect} from 'react-redux';

const Profile = () => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={{color: '#FF1313', fontSize: 20}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 20,
  },
});

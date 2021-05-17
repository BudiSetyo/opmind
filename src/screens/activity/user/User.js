import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Header from './Header';
import Course from './Course';
import UserCourse from './UserCourse';

const User = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <UserCourse navigation={() => navigation.navigate('MyClass')} />
        <View style={{margin: 6}} />
        <Course />
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF6',
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

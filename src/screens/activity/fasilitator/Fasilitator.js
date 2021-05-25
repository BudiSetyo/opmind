import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Header from './Header';
import FasilitatorCourse from './FasilitatorCourse';
import AddCourse from './AddCourse';

const Fasilitator = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <FasilitatorCourse />
        <View style={{margin: 6}} />
        <AddCourse />
      </ScrollView>
    </View>
  );
};

export default Fasilitator;

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

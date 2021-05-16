import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AllSchedule = () => {
  return (
    <View style={styles.content}>
      <View>
        <Text>My Class</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default AllSchedule;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 350,
  },
});

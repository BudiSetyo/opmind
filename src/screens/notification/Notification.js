import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Today from './Today';
import Yesterday from './Yesterday';
import Week from './Week';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Today />
        <Yesterday />
        <Week />
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5784BA',
    paddingVertical: 27,
    paddingHorizontal: 24,
  },
});

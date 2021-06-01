import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Header from './Header';
import Content from './Content';

const Single = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.container}>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Single;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFF',
  },
});

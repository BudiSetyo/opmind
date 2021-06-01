import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Header from './Header';
import Content from './Content';

const Group = ({navigation}) => {
  return (
    <View>
      <Header
        back={() => navigation.goBack()}
        next={() => navigation.navigate('Detail')}
      />
      <ScrollView style={styles.container}>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFF',
  },
});

import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import Header from './Header';

const User = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <Text>Hello world</Text>
        </View>
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
});

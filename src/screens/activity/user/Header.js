import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#5784BA"
      />
      <View>
        <Text style={styles.textTitle}>Activity</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#5784BA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

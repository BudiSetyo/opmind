import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

import Avatar from '../../components/avatar/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#5784BA"
      />
      <View>
        <Text style={styles.textTitle}>Profile</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Avatar />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>Bambang</Text>
          <Text style={styles.textStatus}>online</Text>
        </View>
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
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  textContainer: {
    marginLeft: 33,
  },
  textName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFF',
  },
  textStatus: {
    fontSize: 14,
    color: '#FFF',
  },
});

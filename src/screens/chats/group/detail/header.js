import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({back, create}) => {
  return (
    <View style={styles.container}>
      <View style={styles.createChat}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={back}>
            <Icon name="chevron-back" size={26} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Group details</Text>
        </View>

        <TouchableOpacity onPress={create}>
          <Text style={styles.titleCreate}>Create</Text>
        </TouchableOpacity>
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
  createChat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  titleCreate: {
    fontSize: 20,
    color: '#FFF',
  },
});

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View>
        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="call" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>Phone Numbers</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="code-working" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>
              Change Password
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  optionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});

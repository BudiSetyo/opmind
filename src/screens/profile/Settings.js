import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View>
        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="chatbox-ellipses" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>Chat Settings</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="notifications" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>
              Push Notifications
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="lock-closed" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>
              Privacy and Security
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBtn}>
          <View style={{flex: 2}}>
            <Icon name="list" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>
              Data and Storage
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

export default Settings;

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

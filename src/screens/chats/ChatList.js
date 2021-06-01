import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Avatar from '../../components/avatar/index';

const ChatList = () => {
  const data = {
    image: {uri: ''},
    name: 'Nissa Sabyan',
    time: '10.00 pm',
    message: 'Hello how are you?',
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <Avatar image={data.image} letter={data.name} size={64} />
        </View>
        <View style={{flex: 7}}>
          <Text style={styles.textName}>{data.name}</Text>
          <Text style={styles.textChat}>{data.message}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.textChat}>{data.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textName: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  textChat: {
    fontSize: 14,
    color: '#787878',
  },
});

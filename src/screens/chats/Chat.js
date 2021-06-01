import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';

import Header from './Header';
import ChatList from './ChatList';

const {width, height} = Dimensions.get('window');

const Chats = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Header
        visible={visible}
        onPress={() => setVisible(!visible)}
        single={() => navigation.navigate('Single')}
      />
      <View>
        <ScrollView style={styles.container}>
          <ChatList />
        </ScrollView>
        <View style={{...styles.overlay, height: visible ? height : 0}} />
      </View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(230, 237, 246, 0.75)',
    width: width,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
});

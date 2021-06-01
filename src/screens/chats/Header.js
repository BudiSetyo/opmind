import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({visible, onPress, single, group}) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.createChat}>
        <Text style={styles.titleText}>{visible ? 'Create' : 'Chats'}</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name={visible ? 'close-circle' : 'add-circle'}
            size={26}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>

      <View style={{...styles.search, display: visible ? 'none' : 'flex'}}>
        <TouchableOpacity style={{marginRight: 10}}>
          <Icon name="search" size={20} color="rgba(1, 6, 32, 0.5)" />
        </TouchableOpacity>
        <View style={{flex: 3}}>
          <TextInput
            value={search}
            onChangeText={e => setSearch(e)}
            fontSize={16}
            placeholder="Search"
          />
        </View>
      </View>

      <View style={{...styles.newChat, display: visible ? 'flex' : 'none'}}>
        <TouchableOpacity style={styles.btnNewChat} onPress={single}>
          <View style={styles.iconNewChat}>
            <Icon name="chatbox-ellipses" size={18} color="#000" />
          </View>
          <Text style={styles.textNewChat}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnNewChat} onPress={group}>
          <View style={styles.iconNewChat}>
            <Icon name="people" size={18} color="#000" />
          </View>
          <Text style={styles.textNewChat}>Group</Text>
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
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 33,
    backgroundColor: '#E5E6EB',
    borderRadius: 15,
  },
  newChat: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 23,
  },
  btnNewChat: {
    marginHorizontal: 40,
    alignItems: 'center',
  },
  iconNewChat: {
    alignItems: 'center',
    padding: 7,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  textNewChat: {
    marginTop: 5,
    color: '#FFF',
    fontSize: 16,
  },
});

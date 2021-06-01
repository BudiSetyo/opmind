import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({back, next}) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.createChat}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={back}>
            <Icon name="chevron-back" size={26} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Choose friends</Text>
        </View>

        <TouchableOpacity onPress={next}>
          <Text style={styles.titleCreate}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={{...styles.search}}>
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
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 33,
    backgroundColor: '#E5E6EB',
    borderRadius: 15,
  },
});

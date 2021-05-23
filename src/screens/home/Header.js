import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

import Notif from '../../assets/images/activity/notif.svg';
import Search from '../../assets/images/activity/search.svg';

const Header = ({authReducer}) => {
  const [user, setUser] = useState('');
  const [search, setSeaarch] = useState('');

  const getUsername = () => {
    return setUser(authReducer.user?.data?.username);
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <View style={styles.headerContainer}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#5784BA"
      />
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Wellcome back,</Text>
        <TouchableOpacity>
          <Notif />
        </TouchableOpacity>
      </View>
      <View style={styles.username}>
        <Text style={styles.usernameText}>{user}</Text>
      </View>
      <View style={styles.search}>
        <TouchableOpacity style={styles.searchIcon}>
          <Search />
        </TouchableOpacity>
        <View style={{flex: 3}}>
          <TextInput
            value={search}
            onChangeText={e => setSeaarch(e)}
            fontSize={16}
            placeholder="Looking for something?"
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectHeader = connect(mapStateToProps)(Header);

export default ConnectHeader;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 24,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: '#5784BA',
  },
  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  },
  usernameText: {
    fontSize: 31,
    fontWeight: '500',
    color: '#FFF',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 23,
    backgroundColor: '#E5E6EB',
    borderRadius: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
});

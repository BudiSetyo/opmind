import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import Input from '../../components/input/index';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View>
        <View style={styles.input}>
          <Input
            placeholder="Username or Email"
            type="text"
            value={user}
            onChange={e => setUser(e)}
          />
        </View>

        <View style={styles.input}>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e)}
          />
        </View>
        <View style={styles.forgot}>
          <Text>Forgot password?</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  header: {
    alignItems: 'center',
    marginVertical: 46,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
  },
  forgot: {
    alignItems: 'flex-end',
  },
});

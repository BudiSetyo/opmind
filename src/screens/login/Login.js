import React, {useState} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import BtnGoole from '../../components/button/google';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={{marginTop: 40}}>
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
            <TouchableOpacity>
              <Text>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Btn btnText="Login" color="#5784BA" fontColor="white" />
          </View>
          <View style={styles.btn}>
            <BtnGoole btnText="Login with Google" />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#ADA9BB', marginBottom: 10}}>
            New user? <Text style={{color: '#5784BA'}}>Register</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
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
  btnGroup: {
    marginTop: 100,
  },
  btn: {
    marginVertical: 10,
  },
  footer: {
    marginTop: 150,
    alignItems: 'center',
  },
});

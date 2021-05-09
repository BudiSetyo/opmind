import React, {useState} from 'react';

import {ScrollView, View, Text, StyleSheet} from 'react-native';

import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import BtnGoole from '../../components/button/google';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valPass, setValPass] = useState('');
  return (
    <ScrollView style={{backgroundColor: '#E5E5E5'}}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>
        <View>
          <View style={styles.input}>
            <Input
              placeholder="Username"
              type="text"
              value={username}
              onChange={e => setUsername(e)}
            />
          </View>

          <View style={styles.input}>
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={e => setEmail(e)}
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

          {!password ? (
            <Text style={{display: 'none'}} />
          ) : password.length < 8 ? (
            <Text>Must be at least 8 character</Text>
          ) : (
            <Text style={{display: 'none'}} />
          )}

          <View style={styles.input}>
            <Input
              placeholder="Confirm Password"
              type="password"
              value={valPass}
              onChange={e => setValPass(e)}
            />
          </View>

          {!valPass ? (
            <Text style={{display: 'none'}} />
          ) : valPass === password ? (
            <Text style={{display: 'none'}} />
          ) : (
            <Text>Password does not match!</Text>
          )}
        </View>
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Btn btnText="Register" color="#5784BA" fontColor="white" />
          </View>

          <View style={styles.btn}>
            <BtnGoole btnText="Register with Google" />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#ADA9BB', marginBottom: 10}}>
            Already have account? <Text style={{color: '#5784BA'}}>Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    backgroundColor: '#E5E5E5',
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
    marginTop: 90,
  },
  btn: {
    marginVertical: 10,
  },
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
});

import React, {useState} from 'react';

import {ScrollView, StatusBar, View, Text, StyleSheet} from 'react-native';

import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import BtnGoole from '../../components/button/google';

import {URL_API} from '@env';
import axios from 'axios';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valPass, setValPass] = useState('');

  const [success, setSuccess] = useState();

  const onRegisterHandler = () => {
    if (!username || !email || !password || !valPass) {
      return setSuccess('Some fields cannot be empty');
      // return console.log('Some fields cannot be empty');
    }

    if (password !== valPass) {
      return setSuccess('Password does not match');
      // return console.log('Password does not match');
    }

    axios
      .post(`${URL_API}/auth/register`, {username, email, password})
      .then(res => {
        // console.log(res.data);
        setSuccess(res.data.message);
      })
      .catch(err => {
        // console.log(err.response);
        setSuccess(err.response.data.message);
      });
  };
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
              onChange={e => {
                setSuccess('');
                setUsername(e);
                return;
              }}
            />
          </View>

          <View style={styles.input}>
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={e => {
                setSuccess('');
                setEmail(e);
                return;
              }}
            />
          </View>

          <View style={styles.input}>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => {
                setSuccess('');
                setPassword(e);
                return;
              }}
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
              onChange={e => {
                setSuccess('');
                setValPass(e);
                return;
              }}
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

        <View>{success === '' ? <Text></Text> : <Text>{success}</Text>}</View>

        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Btn
              onPress={onRegisterHandler}
              btnText="Register"
              color="#5784BA"
              fontColor="white"
            />
          </View>

          <View style={styles.btn}>
            <BtnGoole btnText="Register with Google" />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#ADA9BB', marginBottom: 10}}>
            Already have account?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{color: '#5784BA'}}>
              Login
            </Text>
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

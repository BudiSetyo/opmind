import React, {useState, useEffect} from 'react';

import {
  ScrollView,
  StatusBar,
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
} from 'react-native';

import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import BtnGoole from '../../components/button/google';
import Modal from '../../components/modal/index';

import {URL_API} from '@env';
import axios from 'axios';

import {validateEmail, validateUser, validatePassword} from '../../validation';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valPass, setValPass] = useState('');

  const [success, setSuccess] = useState('');
  const [visible, setVisible] = useState(false);

  const onRegisterHandler = () => {
    if (!username || !email || !password || !valPass) {
      setVisible(true);
      return setSuccess('Some fields cannot be empty');
    }

    if (!validateUser(username)) {
      setVisible(true);
      return setSuccess('Username must be more than 4 character');
    }

    if (!validateEmail(email)) {
      setVisible(true);
      return setSuccess('Email is not valid');
    }

    if (!validatePassword(password)) {
      setVisible(true);
      return setSuccess('Password must be more than 8 character');
    }

    if (password !== valPass) {
      setVisible(true);
      return setSuccess('Password does not match');
    }

    axios
      .post(`${URL_API}/auth/register`, {username, email, password})
      .then(res => {
        setVisible(true);
        return setSuccess(res.data.message);
      })
      .catch(err => {
        setVisible(true);
        return setSuccess(err.response.data.message);
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
                setPassword(e);
                return;
              }}
            />
          </View>

          <View style={styles.input}>
            <Input
              placeholder="Confirm Password"
              type="password"
              value={valPass}
              onChange={e => {
                setValPass(e);
                return;
              }}
            />
          </View>
        </View>

        <Modal
          visible={visible}
          message={success}
          onPress={() => setVisible(!visible)}
        />

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

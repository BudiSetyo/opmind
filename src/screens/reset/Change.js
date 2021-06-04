import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL_API} from '@env';

import {ScrollView, StatusBar, View, Text, StyleSheet} from 'react-native';
import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import Modal from '../../components/modal/index';

import {validatePassword} from '../../validation';
const Change = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const getOtp = async () => {
    try {
      const otp = await AsyncStorage.getItem('otp');
      setOtp(otp);
    } catch (err) {
      console.log(err);
    }
  };

  const getEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      setEmail(email);
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = () => {
    if (!password || !confirm) {
      setVisible(true);
      return setMessage('Some fields cannot be empty');
    }

    if (!validatePassword(password)) {
      setVisible(true);
      return setMessage('Password must be more than 8 characters');
    }

    if (password !== confirm) {
      setVisible(true);
      return setMessage('Password does not match');
    }

    axios
      .post(`${URL_API}/auth/newPassword`, {otp, email, password})
      .then(res => {
        // console.log(res.data);
        navigation.navigate('Success');
      })
      .catch(err => {
        console.log(err);
        setVisible(true);
        return setMessage(err.response.data);
      });
  };

  useEffect(() => {
    getOtp();
    getEmail();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <View style={styles.header} />
      <View style={styles.title}>
        <Text style={styles.titleFont}>Create new password</Text>
      </View>
      <View style={styles.paragraf}>
        <Text style={styles.botParagraf}>
          Your new password must be different from previous used password!
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e)}
          />
        </View>
        <View style={{marginTop: 5}}>
          {!password ? (
            <Text style={{display: 'none'}} />
          ) : password.length < 8 ? (
            <Text>Must be at least 8 character</Text>
          ) : (
            <Text style={{display: 'none'}} />
          )}
        </View>
        <View style={{marginTop: 34}}>
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirm}
            onChange={e => setConfirm(e)}
          />
        </View>
        <View style={{marginTop: 5}}>
          {!confirm ? (
            <Text style={{display: 'none'}} />
          ) : confirm === password ? (
            <Text>Password match!</Text>
          ) : (
            <Text style={{display: 'none'}} />
          )}
        </View>
      </View>

      <Modal
        visible={visible}
        message={message}
        onPress={() => setVisible(!visible)}
      />

      <View style={styles.button}>
        <Btn
          onPress={changeHandler}
          color="#5784BA"
          btnText="Create"
          fontColor="#FFF"
        />
      </View>
    </ScrollView>
  );
};

export default Change;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 23,
  },
  header: {
    marginTop: 46,
  },
  title: {
    marginTop: 18,
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  paragraf: {
    marginTop: 32,
    alignItems: 'center',
  },
  botParagraf: {
    fontSize: 16,
    width: '80%',
    textAlign: 'center',
  },
  form: {
    marginTop: 89,
  },
  button: {
    marginTop: 250,
    marginBottom: 24,
  },
});

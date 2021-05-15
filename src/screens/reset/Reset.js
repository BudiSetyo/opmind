import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {URL_API} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/images/reset/reset.svg';
import Modal from '../../components/modal/index';

const Reset = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const storeEmail = async () => {
    try {
      return await AsyncStorage.setItem('email', email);
    } catch (err) {
      console.log(err);
    }
  };

  const resetHandler = () => {
    if (!email) {
      setVisible(true);
      return setMessage('Field is empty');
    }

    axios
      .post(`${URL_API}/auth/reset`, {email})
      .then(res => {
        return navigation.navigate('Otp');
      })
      .catch(err => {
        console.log(err.response.data);
        setVisible(true);
        return setMessage(err.response.data.message);
      });
  };

  useEffect(() => {
    storeEmail();
  }, [email]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: 20}}>
          <Icon name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleFont}>Reset password</Text>
      </View>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.paragraf}>
        <Text style={styles.topParagraf}>
          Enter your email address linked to this account.
        </Text>
        <Text style={styles.botParagraf}>
          We will send you the verification code to reset your password
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChange={e => setEmail(e)}
          />
        </View>
        <View style={styles.button}>
          <Btn
            onPress={resetHandler}
            color="#5784BA"
            btnText="Send"
            fontColor="#FFF"
          />
        </View>
      </View>
      <Modal
        visible={visible}
        message={message}
        onPress={() => setVisible(!visible)}
      />
    </ScrollView>
  );
};

export default Reset;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 23,
  },
  header: {
    marginTop: 27,
  },
  title: {
    marginTop: 18,
    alignItems: 'center',
  },
  titleFont: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  logo: {
    marginTop: 46,
    alignItems: 'center',
  },
  paragraf: {
    marginTop: 32,
    alignItems: 'center',
  },
  topParagraf: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
  },
  botParagraf: {
    marginTop: 8,
    fontSize: 14,
    width: '80%',
    textAlign: 'center',
  },
  form: {
    marginTop: 70,
  },
  button: {
    marginVertical: 24,
  },
});

import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {URL_API} from '@env';

import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TextInput,
  BackHandler,
  StyleSheet,
} from 'react-native';
import Btn from '../../components/button/index';
import Logo from '../../assets/images/reset/otp.svg';
import Modal from '../../components/modal/index';

const Otp = ({navigation, route}) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');

  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();

  // useEffect(() => {
  //   if (first && second && third && fourth) {
  //     setIsFilled(true);
  //   } else {
  //     setIsFilled(false);
  //   }
  // }, [first, second, third, fourth]);

  const otp = [first, second, third, fourth];
  const otpAxios = otp.join('');
  const sendData = {
    email: route.params.email,
    otp: otpAxios,
  };

  // console.log(sendData.email);
  console.log(otpAxios);

  const resendHandler = () => {
    axios
      .post(`${URL_API}/auth/reset`, {email: sendData.email})
      .then(res => {
        // console.log(res.data);
        setVisible(true);
        return setMessage(res.data.message);
      })
      .catch(err => {
        // console.log(err.response.data);
        setVisible(true);
        return setMessage(err.response.data);
      });
  };

  const otpHandler = () => {
    if (otpAxios.lengt < 4) {
      setMessage('Invalid otp');
      setVisible(true);
      return;
    }

    axios
      .post(`${URL_API}/auth/otp`, {otp: otpAxios, email: sendData.email})
      .then(res => {
        // console.log(res.data);
        return navigation.navigate('Change', {...sendData});
      })
      .catch(err => {
        // console.log(err.response);
        setMessage(err.response.data.message);
        setVisible(true);
        return;
      });
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
      <View style={styles.header}></View>
      <View style={styles.title}>
        <Text style={styles.titleFont}>Reset password</Text>
      </View>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.paragraf}>
        <Text style={styles.topParagraf}>
          Enter verification code we just sent to your email address
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.otp}>
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={first}
            ref={num1}
            onChangeText={e => {
              if (e.length < 1) {
                num1.current.focus;
              }
              setFirst(e);
              return num2.current.focus();
            }}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={second}
            ref={num2}
            onChangeText={e => {
              if (e.length < 1) {
                num1.current.focus;
              }
              setSecond(e);
              return num3.current.focus();
            }}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={third}
            ref={num3}
            onChangeText={e => {
              if (e.length < 1) {
                num2.current.focus;
              }
              setThird(e);
              return num4.current.focus();
            }}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={fourth}
            ref={num4}
            onChangeText={e => {
              // console.log(e.length);
              if (e.length < 1) {
                num3.current.focus;
              }
              setFourth(e);
            }}
          />
        </View>

        <Modal
          visible={visible}
          message={message}
          onPress={() => setVisible(!visible)}
        />

        <View style={styles.resend}>
          <Text style={{fontSize: 16, color: '#ADA9BB'}}>
            Didn’t receive a code?{' '}
            <Text onPress={resendHandler} style={{color: '#5784BA'}}>
              Resend
            </Text>
          </Text>
        </View>
        <View style={styles.button}>
          <Btn
            onPress={otpHandler}
            color="#5784BA"
            btnText="Verify"
            fontColor="#FFF"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 23,
  },
  header: {
    marginTop: 46,
  },
  title: {
    marginTop: 20,
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
  form: {
    marginTop: 30,
  },
  button: {
    marginVertical: 37,
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  otpInput: {
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    width: '15%',
    textAlign: 'center',
  },
  resend: {
    marginTop: 30,
    alignItems: 'center',
  },
});

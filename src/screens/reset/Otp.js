import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Btn from '../../components/button/index';
import Logo from '../../assets/images/reset/otp.svg';

const Otp = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  console.log(first, second, third, fourth);
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
            onChangeText={e => setFirst(e)}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={second}
            onChangeText={e => setSecond(e)}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={third}
            onChangeText={e => setThird(e)}
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={fourth}
            onChangeText={e => setFourth(e)}
          />
        </View>
        <View style={styles.resend}>
          <Text style={{fontSize: 16, color: '#ADA9BB'}}>
            Didn’t receive a code?{' '}
            <Text style={{color: '#5784BA'}}>Resend</Text>
          </Text>
        </View>
        <View style={styles.button}>
          <Btn color="#5784BA" btnText="Verify" fontColor="#FFF" />
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

import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {loginHandler} from '../../redux/actions/auth';

import Input from '../../components/input/index';
import Btn from '../../components/button/index';
import BtnGoole from '../../components/button/google';

const Login = ({OnLoginHandler, navigation, authReducer}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView style={{backgroundColor: '#E5E5E5'}}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
      />
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
            <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
              <Text>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Btn
              onPress={() => {
                // console.warn('hallo');
                OnLoginHandler(user, password);
                if (authReducer.isLogin === true) {
                  return navigation.navigate('Home');
                }
              }}
              btnText="Login"
              color="#5784BA"
              fontColor="white"
            />
          </View>
          <View style={styles.btn}>
            <BtnGoole btnText="Login with Google" />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#ADA9BB', marginBottom: 10}}>
            New user?{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{color: '#5784BA'}}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  // console.log(state.authReducer);
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnLoginHandler: (user, password) => {
      dispatch(loginHandler(user, password));
    },
  };
};

const ConnectLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectLogin;

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

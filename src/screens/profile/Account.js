import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {URL_API} from '@env';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../../components/modal/index';
import Input from '../../components/input/index';

import {validatePassword} from '../../validation/index';

const Account = () => {
  const [visiblePhone, setVisiblePhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const authReducer = useSelector(state => state.authReducer);
  const userId = authReducer.user.data?.id;

  const showToast = message => {
    return ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

  const getPhoneNumber = () => {
    axios
      .get(`${URL_API}/profile/${userId}`)
      .then(res => {
        // console.log(res);
        return setPhoneNumber(res.data.result[0].phone);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updatePhoneNumber = () => {
    axios
      .patch(`${URL_API}/profile/${userId}`, {phone_number: newPhoneNumber})
      .then(res => {
        // console.log('hello');
        setNewPhoneNumber('');
        getPhoneNumber();
        return showToast('Success');
      })
      .catch(err => {
        // console.log(err);
        return showToast('Failed');
      });
  };

  const updatePassword = () => {
    if (!password || !confirmPassword) {
      return showToast('Some fields cannot be empty ');
    }

    if (!validatePassword(password)) {
      return showToast('Password must be more than 8 characters');
    }

    if (password !== confirmPassword) {
      return showToast('Password does not match');
    }

    axios
      .patch(`${URL_API}/profile/pass/${userId}`, {password})
      .then(res => {
        // console.log(res);
        setPassword('');
        setConfirmPassword('');
        return showToast('Success');
      })
      .catch(err => {
        // console.log(err);
        return showToast('Failed');
      });
  };

  useEffect(() => {
    getPhoneNumber();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => setVisiblePhone(true)}>
          <View style={{flex: 2}}>
            <Icon name="call" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>Phone Numbers</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => setVisiblePassword(true)}>
          <View style={{flex: 2}}>
            <Icon name="code-working" size={25} color="#3F4356" />
          </View>
          <View style={{flex: 7}}>
            <Text style={{fontSize: 20, color: '#3F4356'}}>
              Change Password
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name="chevron-forward" size={25} color="#3F4356" />
          </View>
        </TouchableOpacity>

        <Modal
          visible={visiblePhone}
          onPress={() => setVisiblePhone(!visiblePhone)}
          size="90%">
          <View>
            <View style={styles.curentPhone}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
                Curent phone number :{' '}
              </Text>
              <Text
                style={{fontSize: 18, color: phoneNumber ? '#000' : '#ADA9A9'}}>
                {phoneNumber ? phoneNumber : 'Empty'}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.inputPhoneNumber}
                placeholder="New phone number"
                keyboardType="numeric"
                value={newPhoneNumber}
                onChangeText={e => setNewPhoneNumber(e)}
              />

              <View style={styles.phoneContainer}>
                <TouchableOpacity
                  style={styles.btnPhoneNumber}
                  onPress={updatePhoneNumber}>
                  <Text style={{color: '#FFF'}}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          visible={visiblePassword}
          onPress={() => setVisiblePassword(!visiblePassword)}
          size="90%">
          <View style={{padding: 20}}>
            <View style={{marginBottom: 10}}>
              <Input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={e => setCurrentPassword(e)}
              />
            </View>

            <View style={{marginBottom: 10}}>
              <Input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={e => setPassword(e)}
              />
            </View>

            <View style={{marginBottom: 40}}>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e)}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.btnPassword}
                onPress={updatePassword}>
                <Text style={{fontSize: 18, color: '#FFF'}}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  optionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  curentPhone: {
    marginVertical: 15,
  },
  inputPhoneNumber: {
    borderWidth: 0.4,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  phoneContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  btnPhoneNumber: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#5784BA',
    borderRadius: 5,
  },
  btnPassword: {
    alignItems: 'center',
    backgroundColor: '#5784BA',
    paddingVertical: 16,
    borderRadius: 10,
  },
});

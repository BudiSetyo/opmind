import axios from 'axios';
import {URL_API} from '@env';

import {ToastAndroid} from 'react-native';

const showToast = message => {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
};

export const loginHandler = (user, password) => {
  return dispatch => {
    return axios
      .post(`${URL_API}/auth/login`, {user, password})
      .then(res => {
        showToast('Login success');
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err);
        showToast(err.response.data.message);
        dispatch({
          type: 'ERROR',
          payload: err.response.data,
        });
      });
  };
};

export const logoutHandler = () => {
  return dispatch => {
    dispatch({type: 'LOGOUT'});
  };
};

import axios from 'axios';
import {URL_API} from '@env';

export const loginHandler = (user, password) => {
  return dispatch => {
    return axios
      .post(`${URL_API}/auth/login`, {user, password})
      .then(res => {
        console.log(res.data);
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err.result);
        dispatch({
          type: 'ERROR',
          payload: err,
        });
      });
  };
};

export const logoutHandler = () => {
  return dispatch => {
    dispatch({type: 'LOGOUT'});
  };
};

import axios from 'axios';
import {URL_API} from '@env';

export const loginHandler = (user, password) => {
  return dispatch => {
    return axios
      .post(`${URL_API}/auth/login`, {user, password})
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: 'LOGIN',
          payload: res.data,
        });
      })
      .catch(err => {
        // console.log(err.response.data);
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

export const refreshHandler = () => {
  return dispatch => {
    dispatch({type: 'REFRESH'});
  };
};

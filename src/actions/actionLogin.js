/*
 * actionLogin
 * Collection of actions for login/logout
*/
import api from './api';
/* action for logging in to the app */
export function loginFunction(loginData) {
  console.log('LOGIN DATA IN ACTION', loginData);
  return {
    type: 'LOGIN',
    payload: api.post('/user/login/', loginData).then((response) => {
      console.log('RESPONSE FROM ', response);
      return response;
    }),
  };
}

export function signupFunction(signUpData) {
  console.log('SIGNUP DATA IN ACTION', signUpData);
  return {
    type: 'SIGNUP',
    payload: api.post('/user/signup/', signUpData),
  };
}

/* action to log out of the app */
export function logoutFunction() {
  console.log('LOGOUT INITIATED FROM ACTION');
  api.defaults.headers.common['Authorization']=JSON.parse(sessionStorage.getItem('user_info')).token;
  return {
    type: 'LOGOUT',
    payload: api.post('/user/logout/'),
  };
}
/*action to get new token after set interval*/
export function getNewToken(payload_data){
  api.defaults.headers.common['Authorization']=JSON.parse(sessionStorage.getItem('user_info')).token;
  return {
    type: 'FETCHTOKEN',
    payload: api.post('/user/refresh_token/'),
  };
}

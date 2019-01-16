import axios from 'axios';

// axios.defaults.xsrfHeaderName = "Authorization";
axios.defaults.headers.common['Authorization'] = JSON.parse(sessionStorage.getItem('user_info')) ? JSON.parse(sessionStorage.getItem('user_info')).token : '';

const userInfo = JSON.parse(sessionStorage.getItem('user_info')) ? JSON.parse(sessionStorage.getItem('user_info')) : ' ';
// header for the login action which doesnot require Authorization Token
function makeHeaders() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

// header for the all the actions which require Authorization Token
function makeHeadersWithToken() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `${axios.defaults.xsrfCookieName}`,
  };
}

export default axios.create({
  baseURL: 'http://192.168.1.231:8000',
  headers: userInfo.token ? makeHeadersWithToken() : makeHeaders(),
});

export default function (state = [], action = {}) {
  switch (action.type) {
    case 'SIGNUP_LOADING':
      console.log('SIGNUP LOADING REDUCER REACHED');
      return {
        ...state,
      };

    case 'SIGNUP_SUCCESS':
      console.log('SIGNUP SUCCESS REDUCER REACHED');
      return {
        ...state,
        signUpData: action.payload.data,
      };

    case 'SIGNUP_ERROR':
      console.log('SIGNUP ERROR REDUCER REACHED');
      return {
        ...state,
      };

    case 'LOGIN_LOADING':
      console.log('LOGIN LOADING REDUCER REACHED');
      return {
        ...state,
      };

    case 'LOGIN_SUCCESS':
      var oldInfo = JSON.parse(sessionStorage.getItem('user_info')) || {};
      var userRoles = JSON.parse(sessionStorage.getItem('userRoles')) || {};
      console.log('LOGIN SUCCESS REDUCER REACHED', action);
      oldInfo = {
        token: action.payload.headers.token,
        role: action.payload.data.result.role,
        username: action.payload.data.result.email,
      };
      userRoles = action.payload.data.result.role;
      sessionStorage.setItem('user_roles', JSON.stringify(userRoles));
      sessionStorage.setItem('user_info', JSON.stringify(oldInfo));
      // location.reload();
      return {
        ...state,
        loginData: action.payload.data,
        authToken: action.payload.headers.token,
      };

    case 'LOGIN_ERROR':
      console.log('LOGIN ERROR REDUCER REACHED');
      return {
        ...state,
      };

    case 'LOGOUT_LOADING':
      console.log('LOGOUT LOADING REDUCER REACHED');
      return {
        ...state,
      };

    case 'LOGOUT_SUCCESS':
    sessionStorage.clear();
      // location.reload();
      return {
        ...state,
        loginData: '',
        authToken: '',
      };

    case 'LOGOUT_ERROR':
      console.log('LOGOUT ERROR REDUCER REACHED');
      return {
        ...state,
      };
    
      case 'FETCHTOKEN_LOADING':
      console.log('FETCHTOKEN LOADING REDUCER REACHED');
      return {
        ...state,
      };

    case 'FETCHTOKEN_SUCCESS':
    console.log('FETCHTOKEN SUCCESS REDUCER REACHED');
        if(action.payload){
            let newToken = action.payload.headers.token;
            let old_info = JSON.parse(window.sessionStorage.getItem("user_info"));
            old_info.token = newToken;
            //window.localStorage.clear();
            window.sessionStorage.setItem("user_info", JSON.stringify(old_info));
        }
      return {
        ...state,
        authToken: action.payload.headers.token,
      };

    case 'FETCHTOKEN_ERROR':
      console.log('FETCHTOKEN ERROR REDUCER REACHED');
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

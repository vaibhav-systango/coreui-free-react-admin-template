import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  form: formReducer,
});

export default rootReducer;

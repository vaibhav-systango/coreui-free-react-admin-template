import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
  persistState('auth'),
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] }),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer);
  return store;
}

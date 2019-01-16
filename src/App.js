import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import configureStore from './store';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const store = configureStore();

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => sessionStorage.getItem('user_info')
//         ? <Component {...props} />
//         : <Redirect to={{ pathname: '/login' }} />}
//     />
//   );
// }

class App extends Component {

  render() {
    return (
      <Provider store={store} history={browserHistory}>
        <HashRouter>
            <Switch>
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              {/*<PrivateRoute exact path="/dashboard" name="Dashboard Page" component={DefaultLayout} />
              <PrivateRoute exact path="/dashboard/buildinginfo/:page" name="internal routes" component={DefaultLayout} />*/}
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

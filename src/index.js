import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import Login from './components/Login/Login';
import LoginTransition from './components/Login/LoginTransition';
import LogoutTransition from './components/Login/LogoutTransition';
import UserProfile from './components/User/UserProfile';
import UsersList from './containers/User/UsersList';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';
import Posts from './containers/Post/Posts';
import UserConnectionsPosts from './containers/Post/UserConnectionsPosts';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App>
          <Switch>
            <Route path="/auth" component={LoginTransition} />
            <Route path="/logout" component={LogoutTransition} />
            <Route path="/home" component={UserProfile} />
            <Route path="/users" component={UsersList} />
            <Route path="/posts" component={Posts} />
            <Route path="/postFeed" component={UserConnectionsPosts} />
            <Route exact path="/" component={Login} />
          </Switch>
        </App>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

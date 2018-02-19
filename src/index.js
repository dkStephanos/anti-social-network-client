import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import Login from './components/Login';
import LoginTransition from './components/LoginTransition';
import UserProfile from './containers/UserProfile';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App>
          <Switch>
            <Route path="/auth" component={LoginTransition} />
            <Route path="/home" component={UserProfile} />
            <Route exact path="/" component={Login} />
          </Switch>
        </App>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

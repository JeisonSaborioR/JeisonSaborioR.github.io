import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory  from 'history/createHashHistory';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';


// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';
//import reques from "./views/Requests/Requests"
// Containers
import Full from './containers/Full/Full';

const history = createHistory();

console.log(history)
ReactDOM.render((
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {/* <Full/> */}
          <Route path="/" name="Home" component={Full}/>
        </Switch>
      </Router>
    </Provider>
  </PersistGate>
), document.getElementById('root'));
 
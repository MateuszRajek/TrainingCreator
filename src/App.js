import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginView from './Components/LoginView/LoginView';
import RegistrationView from './Components/RegistrationView/RegistrationView';
import 'sass-reset';
import './App.sass';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/registration'>
            <RegistrationView />
          </Route>
          <Route path='/login'>
            <LoginView />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

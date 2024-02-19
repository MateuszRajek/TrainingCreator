import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import LoginView from "./screens/LoginView/LoginView";
import RegistrationView from "./screens/RegistrationView/RegistrationView";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/registration">
            <RegistrationView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;


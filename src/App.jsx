import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import SignIn from "./components/pages/signIn";
import Dashboard from "./components/pages/dashboard";
import PrivateRoute from "./components/core/privateRoute";
import { Spinner } from "./components/shared/spinner";

class App extends Component {
  render() {
    const { loading, user } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Router>
          <Switch>
            <PrivateRoute
              exact
              path="/login"
              redirect="/dashboard"
              guard={() => !loading && !user}
              component={SignIn}
            />
            <PrivateRoute
              path="/dashboard"
              redirect="/login"
              guard={() => !loading && user}
              component={Dashboard}
            />
            <Redirect to="/login" />
          </Switch>
        </Router>
      );
    }
  }
}

function mapState(state) {
  return {
    loading: state.logInHandler.loading,
    user: state.logInHandler.response
  };
}

export default connect(mapState)(App);

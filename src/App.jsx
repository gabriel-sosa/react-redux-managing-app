import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { Spin } from "antd";
import "./App.css";

import SignIn from "./components/pages/signIn";
import Dashboard from "./components/pages/dashboard";
import PrivateRoute from "./components/core/privateRoute";

const SSpin = styled(Spin)`
  width: 100%;
  height: 200px;
  margin: 100px auto;
`;

class App extends Component {
  render() {
    const { loading, user } = this.props;
    if (loading) {
      return <SSpin />;
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
    loading: state.requestReducer.loading,
    user: state.requestReducer.response
  };
}

export default connect(mapState)(App);

import React, { Component } from "react";
import { Drawer, Avatar, Menu, Modal, Button } from "antd";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import Home from "./dashboard/home";
import Workers from "./dashboard/workers";

class Dashboard extends Component {
  state = {
    drawerVisible: false,
    modalVisible: false,
    current: "home"
  };
  handleClick = e => {
    if (e.key !== "avatar") this.setState({ current: e.key });
  };
  showModal = () => {
    const { user } = this.props;
    Modal.info({
      title: "user Info",
      content: (
        <div>
          <p>First Name: {user.name.first}</p>
          <p>Last Name: {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Working Position: {user.position}</p>
        </div>
      )
    });
  };
  render() {
    const { name, match } = this.props;
    return (
      <div>
        <Drawer
          title={`Welcome ${name.first} ${name.last}`}
          placement="left"
          closable={false}
          onClose={() => this.setState({ drawerVisible: false })}
          visible={this.state.drawerVisible}
        >
          <Button type="link" onClick={this.showModal}>
            Show User Info
          </Button>
        </Drawer>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item
            key="avatar"
            onClick={() => this.setState({ drawerVisible: true })}
          >
            <Avatar size="large">{name.first}</Avatar>
          </Menu.Item>
          <Menu.Item key="home">
            <Link to={`${match.url}/home`}>Home</Link>
          </Menu.Item>
          <Menu.Item key="workers">
            <Link to={`${match.url}/workers`}>Workers</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path={`${match.url}/home`} component={Home} />
          <Route path={`${match.url}/workers`} component={Workers} />
          <Redirect to={`${match.url}/home`} />
        </Switch>
      </div>
    );
  }
}

const mapState = state => ({
  name: state.requestReducer.response.name,
  user: state.requestReducer.response
});

export default connect(mapState)(Dashboard);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { sendProjectsRequest } from "../../../redux/actions";
import { Spinner } from "../../shared/spinner";

class Projects extends Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: name => <Link to={`${this.props.match.url}/${name}`}>{name}</Link>
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version"
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client"
    },
    {
      title: "Contact",
      dataIndex: "email",
      key: "email",
      render: email => <a href={`mailto:${email}`}>{email}</a>
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status"
    }
  ];
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { loading, projects } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return <Table columns={this.columns} dataSource={projects} />;
    }
  }
}
const mapState = state => ({
  loading: state.projectsHandler.loading,
  projects: state.projectsHandler.response.projects
});

const mapDispatch = dispatch => ({
  getProjects: () => dispatch(sendProjectsRequest())
});

export default connect(
  mapState,
  mapDispatch
)(Projects);

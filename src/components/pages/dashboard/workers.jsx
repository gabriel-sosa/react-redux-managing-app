import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Avatar } from "antd";
import { Link } from "react-router-dom";

import { sendWorkersRequest } from "../../../redux/actions";
import { Spinner } from "../../shared/spinner";

class Workers extends Component {
  columns = [
    {
      title: "Profile Picture",
      dataIndex: "avatar",
      key: "avatar",
      render: avatar => <Avatar src={avatar} />
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: name => (
        <Link to={`${this.props.match.url}/${name.first}-${name.last}`}>
          {name.last}, {name.first}
        </Link>
      )
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: email => <a href={`mailto:${email}`}>{email}</a>
    }
  ];
  componentDidMount() {
    this.props.getWorkers();
  }
  render() {
    const { loading, workers } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return <Table columns={this.columns} dataSource={workers} />;
    }
  }
}

const mapState = state => ({
  loading: state.workersHandler.loading,
  workers: state.workersHandler.response.workers
});

const mapDispatch = dispatch => ({
  getWorkers: () => dispatch(sendWorkersRequest())
});

export default connect(
  mapState,
  mapDispatch
)(Workers);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Table, Tabs, Avatar } from "antd";
import styled from "styled-components";

import { sendProjectRequest } from "../../../redux/actions";
import { Spinner } from "../../shared/spinner";

const SCard = styled(Card)`
  width: 80%;
  margin: 30px auto;
  }
`;

const columns = [
  {
    title: "Profile Picture",
    dataIndex: "avatar",
    key: "avatar",
    render: avatar => <Avatar src={avatar} />
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position"
  }
];

class Project extends Component {
  componentDidMount() {
    const { projectName } = this.props.match.params;
    this.props.getProject(projectName);
  }
  render() {
    const { loading = true, project } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <SCard title={project.name}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Info" key="1">
              <p>version: {project.version}</p>
              <p>Client: {project.client}</p>
              <p>
                Contact: <a href={`mailto:${project.email}`}>{project.email}</a>
              </p>
              <p>Status: {project.status}</p>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Workers" key="2">
              <Table columns={columns} dataSource={project.workers} />
            </Tabs.TabPane>
          </Tabs>
        </SCard>
      );
    }
  }
}

const mapState = state => ({
  loading: state.projectHandler.loading,
  project: state.projectHandler.response
});

const mapDispatch = dispatch => ({
  getProject: name => dispatch(sendProjectRequest(name))
});

export default connect(
  mapState,
  mapDispatch
)(Project);

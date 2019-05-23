import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Card, Avatar } from "antd";

import { sendWorkerRequest } from "../../../redux/actions";
import { Spinner } from "../../shared/spinner";

const SCard = styled(Card)`
  width: 80%;
  margin: 30px auto;
  .ant-card-head-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h1 {
      margin: 0;
    }
  }
`;

class Worker extends Component {
  componentDidMount() {
    const { firstName, lastName } = this.props.match.params;
    this.props.getWorker(firstName, lastName);
  }
  render() {
    const { loading = true, worker = {} } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <SCard
          title={
            <React.Fragment>
              <h1>
                {worker.name.first} {worker.name.last}
              </h1>
              <Avatar src={worker.avatar} size={100} />
            </React.Fragment>
          }
        >
          <p>Gender: {worker.gender}</p>
          <p>Position: {worker.position}</p>
          <p>Race: {worker.race}</p>
          <p>email: {worker.email}</p>
          <p>Currently working on: {worker.currentProject}</p>
        </SCard>
      );
    }
  }
}

const mapState = state => ({
  loading: state.workerHandler.loading,
  worker: state.workerHandler.response
});

const mapDispatch = dispatch => ({
  getWorker: (firstName, lastName) =>
    dispatch(sendWorkerRequest(firstName, lastName))
});

export default connect(
  mapState,
  mapDispatch
)(Worker);

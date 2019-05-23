import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import styled from "styled-components";

import { sendNotificationsRequest } from "../../../redux/actions";
import { Spinner } from "../../shared/spinner";

const SCard = styled(Card)`
  width: 29.3%;
  margin: 2% 2% 0;
`;

const SDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Home extends Component {
  componentDidMount() {
    this.props.getNotifictaions();
  }
  render() {
    const { loading, notifications } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <SDiv>
          {notifications.map((val, i) => (
            <SCard title={val.title} key={i}>
              <p>{val.description}</p>
            </SCard>
          ))}
        </SDiv>
      );
    }
  }
}

const mapState = state => ({
  loading: state.notificationsHandler.loading,
  notifications: state.notificationsHandler.response.notifications
});

const mapDispatch = dispatch => ({
  getNotifictaions: () => dispatch(sendNotificationsRequest())
});

export default connect(
  mapState,
  mapDispatch
)(Home);

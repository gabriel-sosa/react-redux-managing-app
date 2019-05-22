import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Card } from "antd";
import styled from "styled-components";

import { logIn } from "../../redux/actions";

const SCard = styled(Card)`
  max-width: 500px;
  margin: 70px auto;
`;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.fetch(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <SCard title="login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" },
                { type: "email", message: "please input a valid email" }
              ]
            })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </SCard>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

const mapDispatch = dispatch => ({
  fetch: req => dispatch(logIn(req))
});

export default connect(
  null,
  mapDispatch
)(WrappedLoginForm);

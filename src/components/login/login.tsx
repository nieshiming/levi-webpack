import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '@/apis';
import { message } from 'antd';

const initState = {};

type State = Readonly<typeof initState>;
interface Props extends RouteComponentProps {}

class LoginForm extends React.Component<Props, State> {
  readonly state = initState;

  handleSubmit = async (values: any) => {
    let res;
    try {
      res = await login(values);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    if (res) {
      message.success('登录成功');
      const { history } = this.props;
      history.push('/dashboard');
    }
  };

  render() {
    return (
      <Wrapper>
        <FormWrapper>
          <p className="title">levis后台管理系统</p>
          <Form
            className="login-form"
            initialValues={{ username: 'levis', password: '1234556', checked: true }}
            onFinish={this.handleSubmit}
          >
            <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="levi"
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="levi123"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="checked" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;

const FormWrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 45px 50px;
  box-sizing: content-box;
  min-width: 310px;
  .title {
    color: #02a7f0;
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
  }
  .ant-btn {
    margin-top: 30px;
  }
  .ant-input {
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: #ebedf2;
    letter-spacing: 1px;
    &:focus,
    &:hover {
      box-shadow: none !important;
      border-color: #ebedf2 !important;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset !important;
    }
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`;

export default withRouter(LoginForm);

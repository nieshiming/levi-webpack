import React from 'react';
import styled from 'styled-components';
import { FormComponentProps } from 'antd/lib/form/Form';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const initState = {};

type State = Readonly<typeof initState>;
interface Props extends FormComponentProps, RouteComponentProps {}

class LoginForm extends React.Component<Props, State> {
  readonly state = initState;

  handleSubmit = (e: any) => {
    console.log(e);
    const {
      form: { validateFields }
    } = this.props;
    validateFields(async (err: any, values: any) => {
      console.log(err, values);
      if (!err) {
        const { history } = this.props;
        history.push('/dashboard');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Wrapper>
        <FormWrapper>
          <p className="title">levis后台管理系统</p>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入账号' }],
                initialValue: 'levi'
              })(
                <Input
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="levi"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
                initialValue: 'levi123'
              })(
                <Input
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="levi123"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>记住我</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
              >
                登录
              </Button>
              或者 <a href="">立即注册</a>
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

export default Form.create({ name: 'normal_login' })(withRouter(LoginForm));

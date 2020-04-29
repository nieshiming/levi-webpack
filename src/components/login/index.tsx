import React, { FC } from 'react';
import styled from 'styled-components';

import LoginForm from './login';

const Login: FC = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat;
    background-color:#f0f2f5 
  background-size: 100% 100%;
  background-position: bottom;
`;

export default Login;

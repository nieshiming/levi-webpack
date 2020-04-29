import React, { FC, Suspense, useEffect, useState } from 'react';
import { withRouter, Switch, RouteComponentProps } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';
import { Layout, BackTop } from 'antd';

import Loading from '@/components/loading';
import Slider from './slider';
import Header from './header';

interface Props extends RouteComponentProps {}

/** 路由 */
import routes from '@/routers';
const { Content } = Layout;

const LayOut: FC<Props> = props => {
  const [isBlank, setBlank] = useState(true);

  useEffect(() => {
    const {
      location: { pathname },
      history
    } = props;
    /** 在routes在一层可以做路由权限过滤 */
    const currentRoute = (routes || []).find(item => item.path === pathname);

    /** 跟节点 */
    if (pathname === '/') {
      setBlank(true);
      history.push('/dashboard');

      return;
    }

    /** 没有匹配到路由 => 404 */
    if (!currentRoute) {
      setBlank(true);
      history.push('/404');

      return;
    }

    setBlank(currentRoute.layout !== 'blank');
  }, [props]);

  return isBlank ? <Baisc /> : <Blank />;
};

const Baisc: FC = () => {
  return (
    <>
      <StyledLayout>
        <Slider />
        <Layout>
          <Header />
          <Content style={{ padding: 15 }}>
            <Suspense fallback={<Loading />}>
              <Switch>{renderRoutes(routes)}</Switch>
            </Suspense>
          </Content>
        </Layout>
      </StyledLayout>
      <BackTop />
    </>
  );
};

const Blank: FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Suspense>
    </>
  );
};

const StyledLayout = styled(Layout)`
  min-height: 100% !important;
`;

export default withRouter(LayOut);

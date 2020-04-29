import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import ErrorBoundary from '@/components/error-boundary';
import { ConfigProvider, Spin, Empty } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import zhCn from 'antd/lib/locale-provider/zh_CN';
import Layout from './layouts/basic';

/** 全局配置 */
const customizeRenderEmpty = () => <Empty description="暂无数据" />;
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 24 }} spin />);

const App = () => (
  <ErrorBoundary>
    <ConfigProvider locale={zhCn} renderEmpty={customizeRenderEmpty}>
      <Router>
        <Layout />
      </Router>
    </ConfigProvider>
  </ErrorBoundary>
);
export default hot(App);

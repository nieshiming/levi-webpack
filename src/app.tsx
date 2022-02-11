import React from 'react'
import Layout from './layouts/basic'
import { RecoilRoot } from 'recoil'
import zhCn from 'antd/lib/locale-provider/zh_CN'
import { ConfigProvider, Spin, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import ErrorBoundary from '@/components/error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

/** 全局配置 */
const customizeRenderEmpty = () => <Empty description="暂无数据" />
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 24 }} spin />)

const App = () => (
  <ErrorBoundary>
    <RecoilRoot>
      <ConfigProvider locale={zhCn} renderEmpty={customizeRenderEmpty}>
        <Router>
          <Layout />
        </Router>
      </ConfigProvider>
    </RecoilRoot>
  </ErrorBoundary>
)

export default App

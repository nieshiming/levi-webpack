/** 路由 */
import routes from '@/routers'
import styled from 'styled-components'
import { Layout, BackTop } from 'antd'
import { renderRoutes } from 'react-router-config'
import React, { FC, Suspense, useEffect, useState } from 'react'
import { withRouter, Switch, RouteComponentProps } from 'react-router-dom'

import Slider from './slider'
import Header from './header'
import Loading from '@/components/loading'

type Props = RouteComponentProps

const { Content } = Layout
const StyledLayout = styled(Layout)`
  min-height: 100% !important;
`

const Baisc: FC = () => (
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
)

const Blank: FC = () => (
  <>
    <Suspense fallback={<Loading />}>
      <Switch>{renderRoutes(routes)}</Switch>
    </Suspense>
  </>
)

const LayOut: FC<Props> = (props) => {
  const [isBlank, setBlank] = useState(true)

  useEffect(() => {
    const {
      location: { pathname },
      history,
    } = props
    /** 在routes在一层可以做路由权限过滤 */
    const currentRoute = (routes || []).find((item) => item.path === pathname)

    /** 跟节点 */
    if (pathname === '/') {
      setBlank(true)
      history.push('/dashboard')

      return
    }

    /** 没有匹配到路由 => 404 */
    if (!currentRoute) {
      setBlank(true)
      history.push('/404')

      return
    }

    setBlank(currentRoute.layout !== 'blank')
  }, [props])

  return isBlank ? <Baisc /> : <Blank />
}
export default withRouter(LayOut)

import React from 'react'
import { Card, Button, Divider } from 'antd'
import { Router, Route, useHistory } from './customizeRouter/index'

const List = () => <h1>列表</h1>
const Detail = () => <h1>详情</h1>
const About = () => <h1>关于我</h1>

const RenderRoute = () => {
  const history = useHistory()

  const go = (path: string) => {
    const state = { name: Math.random().toString(36).substr(2, 8) }
    history.push(path, state)
  }

  return (
    <div>
      <Button type="link" size="small" onClick={() => go('/list')}>
        列表
      </Button>
      <Button type="link" size="small" onClick={() => go('/detail')}>
        详情
      </Button>
      <Button type="link" size="small" onClick={() => go('/about')}>
        关于我
      </Button>
    </div>
  )
}

export default () => (
  <Card title="自定义mini-router">
    <Router>
      <RenderRoute />

      <Divider />

      <Route path="/list">
        <List />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </Router>
  </Card>
)

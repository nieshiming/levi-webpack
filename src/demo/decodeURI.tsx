import React from 'react'
import { Card, Divider, Button } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom'

const Index = () => <h1>首页</h1>
const Detail = () => <h1>详情页</h1>
const Other = () => {
  const history = useHistory()

  console.log(history)

  const go = () => history.push(`/${encodeURIComponent('шеллы')}`)

  return (
    <Button type="link" size="small" onClick={go}>
      mock
    </Button>
  )
}

const menuList = [
  {
    name: '首页',
    path: '/index',
  },
  {
    name: '才艺展示',
    path: `/${encodeURIComponent('шеллы')}`,
  },
  {
    name: '详情',
    path: '/detail/3',
  },
]

const Main = () => (
  <Card title="decodeURI示例">
    <Router basename="/ahs">
      <div>
        {menuList.map((router) => (
          <Link style={{ margin: 10 }} key={router.path} to={router.path}>
            <span className="routerLink">{router.name}</span>
          </Link>
        ))}

        <Other />
      </div>

      <Divider />

      <Switch>
        <Route path="/index" exact component={Index} />

        <Route path="/шеллы" exact>
          <h1>才艺展示</h1>
        </Route>

        <Route
          path="/detail/:id"
          render={() => {
            console.log(1)

            return <Detail />
          }}
        />
        <Redirect from="/*" to="/index" />
      </Switch>
    </Router>
  </Card>
)

export default Main

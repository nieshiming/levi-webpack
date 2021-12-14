import React from 'react'
import { Card, Divider } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

const Index = () => <h1>首页</h1>
const Detail = () => <h1>详情页</h1>

const menuList = [
  {
    name: '首页',
    path: '/index',
  },
  {
    name: '才艺展示',
    path: `/show`,
  },
  {
    name: '关于我',
    path: '/about',
  },
  {
    name: '详情',
    path: '/detail/3',
  },
]

const Main = () => (
  <Card title="react-router基础示例">
    <Router basename="/ahs">
      <div>
        {menuList.map((router) => (
          <Link style={{ margin: 10 }} key={router.path} to={router.path}>
            <span className="routerLink">{router.name}</span>
          </Link>
        ))}
      </div>

      <Divider />

      <Switch>
        <Route path="/index" exact component={Index} />

        <Route path="/show" exact>
          <h1>才艺展示</h1>
        </Route>

        <Route
          path="/about"
          // eslint-disable-next-line react/no-children-prop
          children={() => {
            console.log('不匹配的时候也会render函数, 加了switch有不会渲染，因为switch只会渲染一次')
            return <h1>关于我</h1>
          }}
        />

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

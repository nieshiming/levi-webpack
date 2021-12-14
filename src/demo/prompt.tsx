import React from 'react'
import { Card, Divider, Modal } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, Prompt, useParams, useHistory } from 'react-router-dom'

const Index = () => <h1>我是首页</h1>
const About = () => (
  <div>
    <h1>关于我</h1>
    <Prompt message="您有未提交的数据，确认要提交吗" />
  </div>
)

const Show = () => {
  const history = useHistory()
  const [block, setBlock] = React.useState<boolean>(true)

  return (
    <div>
      <h1>才艺展示</h1>
      {/* <Prompt message="您有未提交的数据，确认要提交吗" /> */}
      <Prompt
        when={block}
        message={() => {
          Modal.confirm({
            title: '您有未提交的数据，确认要提交吗?',
            onOk: async () => {
              await setBlock(false)

              // 手动进行路由跳转
              history.push('/index')
            },
          })
          return false
        }}
      />
    </div>
  )
}
const Detail = () => {
  const params = useParams()

  return (
    <div>
      <Prompt message="您有未提交的数据，确认要提交吗" />
      <h1>我是详情页{`${JSON.stringify(params)}`}</h1>
    </div>
  )
}

const menuList = [
  {
    name: '首页',
    path: '/index',
  },
  {
    name: '才艺展示',
    path: '/show',
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

const Page = () => (
  <Card title="Prompt示例">
    <Router
      // 全局注册
      getUserConfirmation={(message: string, callback: any) => {
        Modal.confirm({
          title: message,
          onOk: () => callback(true),
          onCancel: () => callback(false),
        })
      }}
    >
      <div>
        {menuList.map((router) => (
          <Link style={{ margin: 10 }} key={router.path} to={router.path}>
            <span className="routerLink">{router.name}</span>
          </Link>
        ))}
      </div>

      <Divider />

      <Switch>
        <Route path="/index" component={Index} />

        <Route path="/show" component={Show} />

        <Route path="/about" component={About} />

        <Route path="/detail/:id" render={() => <Detail />} />

        <Redirect from="/*" to="/index" />
      </Switch>
    </Router>
  </Card>
)

export default Page

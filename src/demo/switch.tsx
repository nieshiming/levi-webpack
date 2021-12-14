import React from 'react'
import { Card, Divider } from 'antd'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

const Index = () => <h1>首页</h1>
const Detail = () => <h1>详情页</h1>

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
    name: '详情',
    path: '/detail/3',
  },
]

/** 输入 localhost:8000/index 会渲染 index组件和other组件 出发在other组件加严格匹配exact  */
const Page = () => (
  <Card title="Switch实例">
    <Router>
      <div>
        {menuList.map((router) => (
          <Link style={{ margin: 10 }} key={router.path} to={router.path}>
            <span className="routerLink">{router.name}</span>
          </Link>
        ))}
      </div>

      <Divider />

      <>
        <Route path="/index" component={Index} />

        <Route path="/show">
          <h1>switch才艺展示</h1>
        </Route>

        <Route path="/detail/:id" render={() => <Detail />} />

        {/* 没有加switch的话，这个组件也会被渲染 */}
        <Route path="/:orderNo">
          <h1>other</h1>
        </Route>

        <Redirect from="/*" to="/index" />
      </>
    </Router>
  </Card>
)

// const Page = () => (
//   <Card title="Switch示例">
//     <Router>
//       <div>
//         {menuList.map((router) => (
//           <Link style={{ margin: 10 }} key={router.path} to={router.path}>
//             <span className="routerLink">{router.name}</span>
//           </Link>
//         ))}
//       </div>

//       <Divider />
//       <Switch>
//         <Route path="/index/" sensitive component={Index} />

//         {/* 把context注入到Component中 */}
//         <Route path="/show">
//           <h1>才艺展示</h1>
//         </Route>

//         <Route path="/detail/:id" render={() => <Detail />} />

//         {/* 没有加switch的话，这个组件也会被渲染 */}
//         <Route path="/">
//           <h1>other</h1>
//         </Route>

//         <Redirect from="/*" to="/index" />
//       </Switch>
//     </Router>
//   </Card>
// )

export default Page

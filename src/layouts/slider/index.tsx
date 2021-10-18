import React from 'react'
import menu from '@/config/menus'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { ClickParam } from 'antd/lib/menu'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  BarChartOutlined,
  CrownOutlined,
  AimOutlined,
  GitlabOutlined,
  DeploymentUnitOutlined,
  DribbbleOutlined,
} from '@ant-design/icons'

const { Sider } = Layout
const { SubMenu } = Menu
const initState = {
  collapsed: false,
  targetKey: '',
  openKeys: [],
}

const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 0;
  line-height: 60px;
  font-size: 25px;
  cursor: pointer;
  img {
    width: 20px;
    border-radius: 50%;
    margin: 22px 6px 18px 5px;
    vertical-align: top;
  }
`

const Icons: {
  [key: string]: any
} = {
  barChart: <BarChartOutlined />,
  crown: <CrownOutlined />,
  typescript: <AimOutlined />,
  gitlab: <GitlabOutlined />,
  allorithm: <DeploymentUnitOutlined />,
  dribbble: <DribbbleOutlined />,
}

interface Props extends RouteComponentProps {}
type State = Readonly<typeof initState>

class Slider extends React.Component<Props, State> {
  readonly state = initState

  /** 初始化菜单选项 */
  componentDidMount() {
    const pathName = window.location.pathname

    this.setState({
      targetKey: pathName,
      openKeys: pathName
        .split('/')
        .slice(1, -1)
        .map((item, index, arr) => {
          if (index > 0) {
            return `/${arr[index - 1]}/${item}`
          }

          return `/${item}`
        }),
    })
  }

  /** 首页 */
  goHome = () => {
    this.setState({ targetKey: '/dashboard' }, () => {
      const { history } = this.props
      history.push('/dashboard')
    })
  }

  checkMenu = (e: ClickParam) => {
    /** 一级菜单，关闭掉openKeys */
    if (e.key.split('/').filter(Boolean).length === 1) {
      this.setState({ openKeys: [] })
    }

    /** 在这里面拦截做403操作 */
    this.setState(
      {
        targetKey: e.key,
      },
      () => {
        const { history } = this.props
        history.push(e.key)
      },
    )
  }

  onOpenChange = (openKeys: string[] = []) => {
    const urls = []
    if (openKeys.length === 1 || openKeys.length === 0) {
      urls.push(...openKeys)
    } else {
      for (let i = openKeys.length - 1; i > 0; i--) {
        if (openKeys[i].includes(openKeys[i - 1])) {
          urls.push(openKeys[i - 1], openKeys[i])
        } else {
          urls.push(openKeys[i])
          break
        }
      }
    }

    this.setState({ openKeys: urls })
  }

  render() {
    const { collapsed, targetKey } = this.state

    return (
      <Sider collapsed={collapsed}>
        {!collapsed && (
          <Title onClick={this.goHome}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" alt="" />
            Levis
          </Title>
        )}
        <Menu
          mode="inline"
          theme="dark"
          openKeys={this.state.openKeys}
          selectedKeys={[`${targetKey}`]}
          onClick={this.checkMenu}
          onOpenChange={this.onOpenChange}
        >
          {(menu || []).map((item) =>
            Array.isArray(item.children) ? (
              <SubMenu
                key={`${item.path}`}
                title={
                  <div>
                    {Icons[item.icon]}
                    <span>{item.name}</span>
                  </div>
                }
              >
                {item.children.map((subItem) =>
                  Array.isArray(subItem.children) ? (
                    <SubMenu key={`${subItem.path}`} title={`${subItem.name}`}>
                      {subItem.children.map((option) => (
                        <Menu.Item key={`${option.path}`}>{option.name}</Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={`${subItem.path}`}>
                      <span>{subItem.name}</span>
                    </Menu.Item>
                  ),
                )}
              </SubMenu>
            ) : (
              <Menu.Item key={`${item.path}`}>
                {Icons[item.icon]}
                <span>{item.name}</span>
              </Menu.Item>
            ),
          )}
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(Slider)

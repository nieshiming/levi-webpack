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
    this.setState({
      targetKey: `${window.location.pathname}`,
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

  urlKeys = (): string[] => {
    const result: string[] = []
    let urlKeys = window.location.pathname.split('/')
    urlKeys = urlKeys.filter((item, index) => index !== 0 && index !== urlKeys.length - 1)
    urlKeys.forEach((item, index) => {
      if (index > 0) {
        result.push(`${result[index - 1]}/${item}`)

        return
      }

      result.push(`/${item}`)
    })
    return result
  }

  render() {
    const defaultSelectedKeys = this.urlKeys()
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
          defaultOpenKeys={defaultSelectedKeys}
          selectedKeys={[`${targetKey}`]}
          mode="inline"
          theme="dark"
          onClick={this.checkMenu}
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

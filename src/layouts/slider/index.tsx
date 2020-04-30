import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import menu from '@/config/menus';

const { Sider } = Layout;
const { SubMenu } = Menu;
const initState = {
  collapsed: false,
  targetKey: ''
};

interface Props extends RouteComponentProps {}
type State = Readonly<typeof initState>;

class Slider extends React.Component<Props, State> {
  readonly state = initState;

  /** 初始化菜单选项 */
  componentDidMount() {
    this.setState({
      targetKey: `${window.location.pathname}`
    });
  }

  goHome = () => {
    this.setState({ targetKey: '/dashboard' }, () => {
      const { history } = this.props;
      history.push('/dashboard');
    });
  };

  checkMenu = (e: ClickParam) => {
    /** 在这里面拦截做403操作 */
    this.setState(
      {
        targetKey: e.key
      },
      () => {
        const { history } = this.props;
        history.push(e.key);
      }
    );
  };

  urlKeys = (): string[] => {
    const result: string[] = [];
    let urlKeys = window.location.pathname.split('/');
    urlKeys = urlKeys.filter((item, index) => index !== 0 && index !== urlKeys.length - 1);
    urlKeys.forEach((item, index) => {
      if (index > 0) {
        result.push(`${result[index - 1]}/${item}`);

        return;
      }

      result.push(`/${item}`);
    });
    return result;
  };

  render() {
    const defaultSelectedKeys = this.urlKeys();
    const { collapsed, targetKey } = this.state;

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
          {(menu || []).map(item => {
            return Array.isArray(item.children) ? (
              <SubMenu
                key={`${item.path}`}
                title={
                  <div>
                    {/* <item.icon /> */}
                    <span>{item.name}</span>
                  </div>
                }
              >
                {item.children.map(subItem => {
                  return Array.isArray(subItem.children) ? (
                    <SubMenu key={`${subItem.path}`} title={`${subItem.name}`}>
                      {subItem.children.map(option => (
                        <Menu.Item key={`${option.path}`}>{option.name}</Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={`${subItem.path}`}>
                      <span>{subItem.name}</span>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={`${item.path}`}>
                {/* <item.icon /> */}
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    );
  }
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
`;

export default withRouter(Slider);

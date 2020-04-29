import React, { FC, useCallback, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Row, Col, Avatar, Menu, Dropdown, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import menus from '@/config/menus';
import { MenuItem } from '@/config/menus/interface';

const { Header } = Layout;

interface Props extends RouteComponentProps {}

const Basic: FC<Props> = props => {
  const [currentMenu, setcurrentMenu] = useState([]);

  /** 获取当前激活菜单 */
  useEffect(() => {
    const pathName = window.location.pathname;

    (menus || []).forEach((item: MenuItem) => {
      if (Array.isArray(item.children)) {
        item.children.forEach(subItem => {
          if (subItem.path === pathName) {
            setcurrentMenu([].concat([item.name, subItem.name]));
          }
        });
      }

      if (item.path === pathName) setcurrentMenu([].concat([item.name]));
    });
  }, [props]);

  const goLogin = useCallback(() => {
    const { history } = props;
    history.push('/login');
  }, [props]);

  const goHome = useCallback(() => {
    const { history } = props;
    history.push('/dashboard');
  }, [props]);

  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined /> 个人中心
      </Menu.Item>
      <Menu.Item>
        <SettingOutlined /> 个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={goLogin}>
        <LogoutOutlined /> 退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper>
      <Row justify="space-between">
        <Col>
          <MenuUnfoldOutlined className="trigger" type="menu-unfold" style={{ fontSize: 20 }} />
        </Col>
        <Col style={{ flex: 1 }}>
          <Row justify="space-between">
            <Col>
              <BreadcrumbWrapper>
                <Breadcrumb.Item onClick={goHome}>
                  <a>
                    <HomeOutlined />
                  </a>
                </Breadcrumb.Item>
                {(currentMenu || []).map(item => (
                  <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                ))}
              </BreadcrumbWrapper>
            </Col>

            <Col>
              <Dropdown overlay={menu}>
                <AvatarWrapper>
                  <Avatar
                    icon={UserOutlined}
                    className="user"
                    src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                  />
                  欢迎 levis
                  <DownOutlined />
                </AvatarWrapper>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Header)`
  background: #fff !important;
  padding: 0 20px !important;
`;

const AvatarWrapper = styled.div`
  margin-left: 30px;
  height: 100%;
  display: inline-block;
  .user {
    margin-top: -1px;
    margin-right: 5px;
  }
`;

const BreadcrumbWrapper = styled(Breadcrumb)`
  line-height: 60px !important;
  padding-left: 15px !important;
`;

export default withRouter(Basic);

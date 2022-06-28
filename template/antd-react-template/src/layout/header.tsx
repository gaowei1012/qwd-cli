/*
 * @Author: mingwei
 * @Date: 2022-03-28 10:08:39
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 13:03:37
 * @FilePath: /dg-cli/template/antd-react-template/src/layout/header.tsx
 * @Description:
 */
import React, {useState, useEffect} from 'react';
import {Layout, Dropdown, Avatar, Menu, Row, Col, Affix} from 'antd';
import {EditOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';
import {useNavigate, useLocation} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {useStore} from '@/hooks/useStore';
import logo from '@/assets/images/qwd_logo.png';
import {HeaderMenu} from './menus';
import '@/styles/layout.scss';
import _ from 'lodash';

const {Header} = Layout;

export const AppHeader: React.FC<any> = observer(() => {
  const {authorizationStoreInstance, layoutInstance} = useStore();
  const [selectKey, setSelectKey] = useState<string[]>(['/']);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => setSelectKey([location.pathname]), [location.pathname]);

  const loginOut = async () => {
    localStorage.clear();
    // window.location.href = userorg.base + userorg.path.login_page
    navigate('/login');
    document.cookie =
      'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  const menu = () => (
    <Menu>
      <Menu.Item>
        <span
          style={{display: 'inline-block', width: '100%'}}
          onClick={() => {
            // window.location.href = userorg.base + userorg.path.user_center
            navigate('/usercenter');
          }}>
          <EditOutlined /> 个人中心
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          style={{display: 'inline-block', width: '100%'}}
          onClick={loginOut}>
          <LoginOutlined /> 退出登录
        </span>
      </Menu.Item>
    </Menu>
  );

  const headerMenus = () => {
    return _.map(HeaderMenu, item => {
      return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
    });
  };
  return (
    <Affix>
      <Header>
        <Row>
          <Col
            span={6}
            onClick={() => {
              navigate('/hezong/project');
            }}>
            <Row gutter={[8, 0]} style={{cursor: 'pointer'}}>
              <Col>
                <Avatar
                  icon={<UserOutlined />}
                  src={logo}
                  alt="avatar"
                  size={30}
                />
              </Col>
              <Col>
                <h3 style={{color: '#fff'}}>
                  {layoutInstance.getLogoTitleState()}
                </h3>
              </Col>
            </Row>
          </Col>

          <Col span={2} className="user_outlined">
            <Dropdown overlay={menu}>
              <Row style={{width: '95%'}}>
                <Col>
                  <Avatar
                    icon={<UserOutlined />}
                    src={
                      authorizationStoreInstance.get_login_state().profile
                        .avatar_url
                    }
                    alt="avatar"
                  />
                </Col>
                <Col span={12} offset={3} className="app-header-username">
                  <b style={{color: '#fff', letterSpacing: '4px'}}>
                    {authorizationStoreInstance.get_login_state().profile.name}
                  </b>
                </Col>
              </Row>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
});

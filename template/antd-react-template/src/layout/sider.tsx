/*
 * @Author: weiqi
 * @Date: 2022-03-18 14:51:15
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-20 09:58:31
 * @Description: file content
 * @FilePath: /hezong/frontend/ms-hezong/src/layout/sider.tsx
 */
import React, { useEffect, useState } from 'react'
import { Menu, Layout, Affix } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { AffixTop } from '@/config/styles'
import { menu } from '@/config/index'

const { Sider } = Layout
const { Item, SubMenu } = Menu

export const AppSider: React.FC<{
  logoTitle: string
}> = ({ logoTitle }) => {
  const [selectKey, setSelectKey] = useState<string[]>(['/'])
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setSelectKey([location.pathname])
  }, [])

  const renderSubsMenu = (m: any, idx: number) => (
    <SubMenu key={idx} title={m.name} icon={<img className='icon' src={m.icon} />}>
      {m.subs.map((item: { path: React.Key | null | undefined; icon: any; name: any }) => {
        return (
          <Item key={item.path} icon={<img className='icon' src={item.icon} />}>
            {item.name}
          </Item>
        )
      })}
    </SubMenu>
  )

  const renderMenuItem = (m: any, idx: number) => (
    <Item key={idx} icon={<img className='icon' src={m.icon} />}>
      {m.name}
    </Item>
  )

  return (
    <Affix offsetTop={AffixTop}>
      <Sider
        theme='light'
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '95vh' }}
        //   className='app-sider'
        //   style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, borderRight: '1px solid #e0e0e0' }}
      >
        <div className='logo'>
          <div style={{ fontSize: '14px' }}>{logoTitle}</div>
        </div>
        <Menu
          theme='light'
          mode='inline'
          style={{ height: '100%' }}
          selectedKeys={selectKey}
          onClick={e => {
            setSelectKey([e.key])
            navigate(e.key)
          }}
        >
          {menu.map((m, idx) => {
            return m.subs && m.subs.length > 0 ? renderSubsMenu(m, idx) : renderMenuItem(m, idx)
          })}
        </Menu>
        <div className='sider-collapse' onClick={() => setCollapsed(!collapsed)}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: { padding: 20 },
          })}
        </div>
      </Sider>
    </Affix>
  )
}

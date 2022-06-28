/*
 * @Author: weiqi
 * @Date: 2022-03-28 11:37:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-30 09:50:34
 * @Description: file content
 * @FilePath: /hezong/frontend/ms-hezong/src/layout/layout.tsx
 */
import React from 'react'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { RUNTIME } from '@/env'
import '@/styles/layout.scss'
const { isTest } = RUNTIME
const { Content } = Layout

const DefaultLayout: React.FC<
  {
    appSider?: React.ReactElement
    appHeader?: React.ReactElement
    routeOutlet: React.ReactElement
    appFooter?: React.ReactElement
  } & any
> = observer(props => {
  const { appSider, routeOutlet, appHeader, appFooter } = props
  const { loadingInstance } = useStore()
  const location = useLocation()

  const matchPath = location.pathname
  //   console.log(location)

  return (
    <Layout className='layout'>
      {appHeader}
      <Layout>
        {appSider}
        <Content className={`${matchPath == ('/login' || '/register') ? 'app-login-content' : 'app-content'}`}>
          <Spin wrapperClassName='spin-wrap' spinning={loadingInstance.loading}>
            {routeOutlet}
          </Spin>
          <div
            style={{
              position: 'fixed',
              right: 30,
              bottom: 50,
              fontSize: 30,
              color: 'red',
              pointerEvents: 'none',
              display: isTest ? 'block' : 'none',
            }}
          >
            测试版
          </div>
        </Content>
      </Layout>
      {appFooter}
    </Layout>
  )
})

export default DefaultLayout

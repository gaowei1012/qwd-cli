/*
 * @Author: weiqi
 * @Date: 2022-03-28 11:37:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-11 10:15:29
 * @Description: file content
 * @FilePath: /hezong/frontend/ms-hezong/src/routes/base.tsx
 */
import * as React from 'react'
import { useLocation, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import DefaultLayout from '@/layout/layout'
import routes from '@/routes/routes'

import { observer } from 'mobx-react-lite'
import { useStore } from '@/hooks/useStore'
import { AppHeader } from '@/layout/header'
import { AppFooter } from '@/layout/footer'
import { AppSider } from '@/layout/sider'
import _ from 'lodash'

const BaseRoutes = observer(() => {
  const { layoutInstance } = useStore()
  const location = useLocation()

  const renderReplaceView = () => {
    let replace: any = {}
    _.map(routes, r => {
      if (new RegExp('^' + r.path.replace(/:(\w+)/g, '\\w+') + '$').test(location.pathname)) {
        replace = r
        return replace
      }
    })

    // 加载header头部
    const renderHeader = () => {
      return <>{replace['header'] ? <AppHeader {...replace} /> : <></>}</>
    }

    // 加载左侧sider
    const renderSider = () => {
      return <>{replace['sider'] ? <AppSider logoTitle={layoutInstance.getLogoTitleState()} /> : <></>}</>
    }

    const renderFooter = () => {
      return <>{replace['footer'] ? <AppFooter /> : <></>}</>
    }

    return <DefaultLayout appHeader={renderHeader()} appSider={renderSider()} appFooter={renderFooter()} routeOutlet={<Outlet />} {...replace} />
  }

  const renderRoute = () => (
    <Routes>
      <Route path='/' element={renderReplaceView()}>
        <Route path='/' element={<Navigate to='/login' />} />
        {routes.map((route: { sider: boolean; path: string; element: any; header: boolean }, idx: number) => {
          return <Route key={idx} path={route.path} element={route.element} />
        })}
      </Route>
    </Routes>
  )
  return <>{renderRoute()}</>
})

export default BaseRoutes

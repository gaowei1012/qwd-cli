/*
 * @Author: mingwei
 * @Date: 2022-05-11 09:09:03
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-30 09:53:06
 * @FilePath: /hezong/frontend/ms-hezong/src/layout/footer.tsx
 * @Description:
 */
import React from 'react'
import { Layout } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/hooks/useStore'
import '@/styles/layout.scss'

const { Footer } = Layout

export const AppFooter: React.FC<{}> = observer(() => {
  const { layoutInstance } = useStore()
  return <Footer className='footer'>{layoutInstance.getLogoTitleState()}</Footer>
})

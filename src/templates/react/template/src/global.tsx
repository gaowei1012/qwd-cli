/*
 * @Author: mingwei
 * @Date: 2022-06-14 14:41:30
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 17:03:03
 * @FilePath: /pri-cli/src/templates/react/template/src/global.tsx
 * @Description:
 */
import React from 'react';
import { Spin } from 'antd';
import { useStore } from './hooks/useStore';
import { LoadingOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';

export const Global: React.FC<{ children: React.ReactElement }> = observer(({ children }) => {
  const { loadingInstance } = useStore();
  const spinIcon = <LoadingOutlined />;
  console.log('global', loadingInstance.loading);
  return (
    <Spin tip="加载中..." spinning={loadingInstance.loading} indicator={spinIcon}>
      {children}
    </Spin>
  );
});

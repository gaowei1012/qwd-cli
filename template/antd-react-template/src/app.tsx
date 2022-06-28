import React from 'react';
import {StoreProvider} from '@/hooks/useStore';
import {HashRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import BaseRoutes from '@/routes/base';
import zh_CN from 'antd/lib/locale/zh_CN';

import '@/styles/app.scss';
import '@/styles/base.scss';

const App: React.FC<{}> = () => (
  <ConfigProvider locale={zh_CN}>
    <StoreProvider>
      <HashRouter>
        <BaseRoutes />
      </HashRouter>
    </StoreProvider>
  </ConfigProvider>
);

export default App;

/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-26 09:36:24
 * @FilePath: /yl-app/frontend/src/app.tsx
 * @Description: 项目入口文件
 */
import React, { useEffect } from 'react';
import DynamicTabNavigator from '@/rootNavigation/DynamicTabNavigator';
import { StoreProvider } from '@/rootStore/useStore';
import SplashScreen from 'react-native-splash-screen';
import { Loading } from '@/common/component';
import Config from 'react-native-config';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const App: React.FC<{}> = () => {
  useEffect(() => {
    console.log('server connect', Config, Config.BASE_URL);
    (async () => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1500);
    })();
  }, []);
  return (
    <StoreProvider>
      <Loading />
      <DynamicTabNavigator />
    </StoreProvider>
  );
};

export default App;

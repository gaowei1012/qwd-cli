/*
 * @Author: mingwei
 * @Date: 2022-02-14 15:50:45
 * @LastEditors: weiqi
 * @LastEditTime: 2022-02-22 17:26:10
 * @Description: file content
 * @FilePath: /yl-mobile/frontend/src/rootStore/useStore.tsx
 */
import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import rootStore, { RootStore } from './index';

const storeContext = React.createContext<RootStore | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable(() => rootStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

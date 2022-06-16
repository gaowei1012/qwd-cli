/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-16 18:09:59
 * @FilePath: /dg-cli/template/react-native-template/src/rootStore/index.ts
 * @Description:
 */
import { GlobalStore, GlobalStoreInterface } from '@/common/globalStore';
// 属性继承
export interface RootStore extends GlobalStoreInterface {}

const rootStore = {
  ...GlobalStore,
};

export default rootStore;

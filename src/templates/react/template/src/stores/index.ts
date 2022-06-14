/*
 * @Author: mingwei
 * @Date: 2022-06-14 11:44:31
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 14:39:34
 * @FilePath: /vite-project/src/stores/index.ts
 * @Description:
 */
import { NewsStore } from "./news";
import { LoadingStore } from "./loading";

export type RootStoreInterface = {
  loadingInstance: LoadingStore;
  newInstance: NewsStore;
};

export const rootStore = {
  loadingInstance: new LoadingStore(),
  newInstance: new NewsStore(),
};

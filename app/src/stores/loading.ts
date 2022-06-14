/*
 * @Author: mingwei
 * @Date: 2022-06-14 14:39:02
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 15:56:09
 * @FilePath: /vite-project/src/stores/loading.ts
 * @Description:
 */
import { observable, action, makeObservable } from "mobx";
export class LoadingStore {
  loading: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      // set_loading: action,
      // remove_loading: action,
    });
  }

  set_loading() {
    this.loading = true;
  }

  remove_loading() {
    this.loading = false;
  }
}

import {LoadingStore} from './loading';
import {LayoutStore} from './layout/index';

export type RootStoreInterface = {
  layoutInstance: LayoutStore;
};

export const rootStore = {
  loadingInstance: new LoadingStore(),
  layoutInstance: new LayoutStore(),
};

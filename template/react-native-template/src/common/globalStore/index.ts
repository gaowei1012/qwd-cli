import { LoadingStore } from './loadingStore';
import { FontSizeStore } from './fontSizeStore';

export type GlobalStoreInterface = {
  loadingInstance: LoadingStore;
  fontSizeInstance: FontSizeStore;
};

export const GlobalStore = {
  loadingInstance: new LoadingStore(),
  fontSizeInstance: new FontSizeStore(),
};

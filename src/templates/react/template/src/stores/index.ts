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

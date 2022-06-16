import { makeObservable, observable, action } from 'mobx';

export class LoadingStore {
  show: 'flex' | 'none' = 'none';

  constructor() {
    makeObservable(this, {
      show: observable,
      showLoading: action,
    });
  }

  showLoading(status: boolean) {
    this.show = status ? 'flex' : 'none';
  }
}

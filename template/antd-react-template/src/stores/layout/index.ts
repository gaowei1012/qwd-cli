import {observable, makeObservable, toJS} from 'mobx';

export class LayoutStore {
  logoTitle: string = 'vite admin';
  visibled: boolean = false;
  constructor() {
    makeObservable(this, {
      visibled: observable,
      logoTitle: observable,
    });
  }

  setLogoTitleState(title: string) {
    this.logoTitle = title;
  }

  setVisibledState(visibled: boolean) {
    this.visibled = visibled;
  }

  getLogoTitleState() {
    return toJS(this.logoTitle);
  }

  getVisibledState() {
    return toJS(this.visibled);
  }
}

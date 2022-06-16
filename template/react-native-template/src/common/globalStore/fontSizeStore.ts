import { observable, makeObservable, toJS } from 'mobx';

export class FontSizeStore {
  fontSize: number = 16;
  constructor() {
    makeObservable(this, {
      fontSize: observable,
    });
  }

  setFontSizeState(size: number) {
    this.fontSize = size;
  }

  getFontSizeState() {
    return toJS(this.fontSize);
  }
}

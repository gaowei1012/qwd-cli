import Toast from 'react-native-root-toast';

export class RootToast {
  static toast: any;

  /**
   * toast 提示
   * @param msg 提示显示文本
   * @param duration 显示时长
   */
  static showToast(msg: string, duration?: number | 3000) {
    this.toast = Toast.show(msg, {
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      duration,
    });
  }
}

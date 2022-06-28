/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 09:53:30
 * @FilePath: /dg-cli/template/react-native-template/src/common/styles/topNavigationBar.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { nav_bar_h } from '@/config/statusBarHeight';
import { px2dp, width } from 'react-native-dev-sdk';

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: nav_bar_h, // 根据平台设置高度
    paddingHorizontal: px2dp(15),
    width,
  },
  navBarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarButton: {
    alignItems: 'center',
    // justifyContent: 'center',
    // width: px2dp(30),
    // height: px2dp(40),
  },
  container: {
    // backgroundColor: '#85DFD2', // 设置背景颜色
  },
  title: {
    width: px2dp(200),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusBar: {
    // height: status_bar_h ? status_bar_h : '',
  },
  leftBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: px2dp(50),
    paddingLeft: px2dp(6),
    // height: NAV_BAR_H, // 根据平台设置高度
  },
  rightBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: px2dp(50),
  },
});

export { styles };

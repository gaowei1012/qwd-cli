/*
 * @Author: weiqi
 * @Date: 2022-02-22 17:49:06
 * @LastEditors: weiqi
 * @LastEditTime: 2022-02-22 17:50:22
 * @Description: file content
 * @FilePath: /yl-mobile/frontend/src/common/styles/button.ts
 */
import { px2dp } from '../';
import { StyleSheet } from 'react-native';
import globalStyles from '@/config/global';
import DEFAULT_STYLES from '@/config/default';
const { flexCenter, alignSelfCenter } = globalStyles;
const { DEFAULT_BTN_TEXT_COLOR, DEFAULT_BTN_BG_COLOR } = DEFAULT_STYLES;

export const buttonStyles = StyleSheet.create({
  buttonWrap: {
    width: px2dp(327),
    height: px2dp(58),
    borderRadius: px2dp(30),
    backgroundColor: DEFAULT_BTN_BG_COLOR,
    ...flexCenter,
    ...alignSelfCenter,
  },
  btnText: {
    fontSize: px2dp(20),
    color: DEFAULT_BTN_TEXT_COLOR,
    fontWeight: '500',
  },
});

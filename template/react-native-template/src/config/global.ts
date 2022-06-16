/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 13:53:00
 * @FilePath: /yl-app/frontend/src/config/global.ts
 * @Description:
 */
import { width, height, px2dp } from '@/common';
import DEFAULT_STYLES from './default';
import { StyleSheet } from 'react-native';
const { DEFAULT_DEFAULT_ESSSENTIAL_BG, DEFAULT_BACKGROUND_COLOR } = DEFAULT_STYLES;

const globalStyles = StyleSheet.create({
  flexRowItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumnItems: {
    flexDirection: 'column',
  },
  flexRowJustifyCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowJustifyAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexStartItemCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrap: {
    height,
    width,
    backgroundColor: DEFAULT_DEFAULT_ESSSENTIAL_BG,
    paddingTop: px2dp(5),
  },
  containerWrap: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  content: {
    marginHorizontal: px2dp(12),
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    borderTopLeftRadius: px2dp(6),
    borderTopRightRadius: px2dp(6),
    paddingHorizontal: px2dp(11),
  },
});

export default globalStyles;

/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-01 17:38:03
 * @FilePath: /yl-app/frontend/src/config/statusBarHeight.ts
 * @Description:
 */
import { Platform } from 'react-native';

const NAV_BAR_H_IOS = 44;
const NAV_BAR_H_ANDROID = 50;

export const status_bar_h = Platform.OS === 'ios' ? 20 : null;
export const nav_bar_h = Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID;

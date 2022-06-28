/*
 * @Author: mingwei
 * @Date: 2022-06-16 18:18:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 09:53:16
 * @FilePath: /dg-cli/template/react-native-template/src/common/styles/loading.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { px2dp } from 'react-native-dev-sdk';

export const loadingStyles = StyleSheet.create({
  loding_mask: {
    backgroundColor: '#00000073',
    position: 'absolute',
    bottom: '46%',
    width: px2dp(120),
    height: px2dp(120),
    borderRadius: px2dp(6),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 9999,
  },
});

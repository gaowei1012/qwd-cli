/*
 * @Author: weiqi
 * @Date: 2022-02-22 16:20:44
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 09:53:23
 * @Description: file content
 * @FilePath: /dg-cli/template/react-native-template/src/common/styles/pagination.ts
 */
import { StyleSheet } from 'react-native';
import { px2dp } from 'react-native-dev-sdk';

export const paginationComponentStyles = StyleSheet.create({
  topLoadingWrap: {
    position: 'absolute',
    height: px2dp(50),
    width: '100%',
  },
  bottomLoadingWrap: {
    position: 'absolute',
    bottom: px2dp(-50),
    width: '100%',
  },
});

/*
 * @Author: weiqi
 * @Date: 2022-02-22 16:20:44
 * @LastEditors: weiqi
 * @LastEditTime: 2022-02-22 16:27:50
 * @Description: file content
 * @FilePath: /yl-mobile/frontend/src/common/styles/pagination.ts
 */
import { StyleSheet } from 'react-native';
import { px2dp } from '@/common/utils';

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

/*
 * @Author: mingwei
 * @Date: 2022-04-25 09:23:45
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-25 09:44:48
 * @FilePath: /yl-app/frontend/src/common/styles/empty.ts
 * @Description:
 */

import { StyleSheet } from 'react-native';
import { px2dp } from '../utils';

const styles = StyleSheet.create({
  emptyContainer: {
    width: px2dp(300),
    alignItems: 'center',
    alignSelf: 'center',
  },
  emptyImage: {
    width: '100%',
    height: '100%',
  },
});

export default styles;

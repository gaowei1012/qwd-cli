/*
 * @Author: mingwei
 * @Date: 2022-04-24 13:32:15
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-25 09:25:36
 * @FilePath: /yl-app/frontend/src/common/component/Empty.tsx
 * @Description:
 */

import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/empty';

const Empty: React.FC<{ height?: any }> = props => {
  const { height } = props;
  return (
    <View style={[styles.emptyContainer, { height: height ? height : '100%' }]}>
      <Image
        style={styles.emptyImage}
        resizeMode="contain"
        source={require('../../assets/icon/empty.png')}
      />
    </View>
  );
};

export { Empty };

/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-03-31 13:44:13
 * @FilePath: /yl-app/frontend/src/common/goBack.tsx
 * @Description:
 */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { back } from './utils/navigationService';
import styles from '@/common/styles/goback';

const GoBack: React.FC<{ action?: any }> = props => {
  let { action } = props;
  action = action ? action : () => back();
  return (
    <TouchableOpacity style={styles.backWrap} activeOpacity={1} onPress={action}>
      <Image style={styles.back} source={require('../assets/icon/arrow_left.png')} />
    </TouchableOpacity>
  );
};

export { GoBack };

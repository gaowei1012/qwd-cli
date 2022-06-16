/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-03-31 13:47:41
 * @FilePath: /yl-app/frontend/src/rootNavigation/TabBarItem.tsx
 * @Description:
 */
import React from 'react';
import { Image } from 'react-native';

type tabBarItemType = {
  tintColor?: string;
  selectIcon?: string;
  normalIcon?: string;
  focused?: boolean;
};

const TabBarItem: React.FC<tabBarItemType> = props => {
  const imgUrl: any = props.focused ? props.selectIcon : props.normalIcon;
  return (
    <Image
      resizeMode="contain"
      style={{ tintColor: props.tintColor, width: 25, height: 25 }}
      source={imgUrl}
    />
  );
};

export default TabBarItem;

/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-03-31 13:44:23
 * @FilePath: /yl-app/frontend/src/common/topNavigationBar.tsx
 * @Description:
 */
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from '@/common/styles/topNavigationBar';
import { topNavigationBarType } from '@/common/types/topNavigationBarType';

const TopNavigationBar: React.FC<topNavigationBarType> = props => {
  const {
    style,
    statusBar,
    rightButton,
    titleLayoutStyle,
    leftButton,
    hide,
    titleView,
    color,
    fontSize,
    title,
  } = props;
  const getButtonElement = (ele: any) => {
    return <View style={styles.navBarButton}>{ele ? ele : null}</View>;
  };
  return (
    <View style={[styles.container, style]}>
      {!statusBar?.hiddle ? (
        <View style={styles.statusBar}>
          <StatusBar {...statusBar} />
        </View>
      ) : null}
      {!hide ? (
        <View style={styles.navBar}>
          <View style={styles.leftBtnBox}>{getButtonElement(leftButton)}</View>
          <View style={[styles.navBarTitleContainer, titleLayoutStyle]}>
            {titleView ? (
              <>{titleView}</>
            ) : (
              <Text numberOfLines={1} style={[styles.title, { color, fontSize }]}>
                {title}
              </Text>
            )}
          </View>
          <View style={styles.rightBtnBox}>{getButtonElement(rightButton)}</View>
        </View>
      ) : null}
    </View>
  );
};

export { TopNavigationBar };

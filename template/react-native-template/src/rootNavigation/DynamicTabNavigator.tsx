/*
 * @Author: mingwei
 * @Date: 2022-06-16 18:06:17
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-16 18:08:18
 * @FilePath: /dg-cli/template/react-native-template/src/rootNavigation/DynamicTabNavigator.tsx
 * @Description:
 */
import * as React from 'react';
import 'react-native-gesture-handler';
import { setToLeveNavigator } from '../common';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootNavigatorBottom from './RootNavigatorBottom';

const Stack = createNativeStackNavigator();

export default function DynamicTabNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigatorRef => setToLeveNavigator(navigatorRef)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="root" component={RootNavigatorBottom} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

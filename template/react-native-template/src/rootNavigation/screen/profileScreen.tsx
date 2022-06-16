/*
 * @Author: mingwei
 * @Date: 2022-06-16 18:06:17
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-16 18:14:02
 * @FilePath: /dg-cli/template/react-native-template/src/rootNavigation/screen/profileScreen.tsx
 * @Description:
 */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '@/pages/profile';

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { ProfileScreen };

/*
 * @Author: weiqi
 * @Date: 2022-02-22 17:09:26
 * @LastEditors: weiqi
 * @LastEditTime: 2022-02-22 17:55:22
 * @Description: file content
 * @FilePath: /yl-mobile/frontend/src/common/component/Button.tsx
 */
import React from 'react';
import { PlatformUtils } from '@/common/utils';
import { buttonStyles } from '@/common/styles';
import { TouchableOpacity, TouchableNativeFeedback, Text, View } from 'react-native';

interface ButtonProps {
  btnText: string;
  onPress: () => void;
  customStyle?: any;
  customTextStyle?: any;
  disabled?: boolean;
  addOn?: any;
}

export const Button: React.FC<ButtonProps> = props => {
  const { btnText, onPress, customStyle, customTextStyle, disabled, addOn } = props;
  return (
    <>
      {PlatformUtils.getPlatform() == 'ios' ? (
        <TouchableOpacity
          disabled={disabled}
          style={[buttonStyles.buttonWrap, customStyle]}
          activeOpacity={1}
          onPress={onPress}>
          <Text style={[buttonStyles.btnText, customTextStyle]}>{btnText}</Text>
          {addOn}
        </TouchableOpacity>
      ) : (
        <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
          <View style={[buttonStyles.buttonWrap, customStyle]}>
            <Text style={[buttonStyles.btnText, customTextStyle]}>{btnText}</Text>
            {addOn}
          </View>
        </TouchableNativeFeedback>
      )}
    </>
  );
};

import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { Colors, Fonts } from '~/themes';

type TextProps = {
  style?: any;
  children: any;
};

export default function AppText({ style, children }: TextProps) {
  return (
    <Text
      style={{
        fontFamily: Fonts.fontFamily,
        fontWeight: Fonts.fontWeight.bold,
        fontSize: 15,
        color: Colors.black,
        ...style,
      }}>
      {children}
    </Text>
  );
}

import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { Colors } from '~/themes';

type TextProps = {
  style?: any;
  children: any;
};

export default function AppText({ style, children }: TextProps) {
  return (
    <Text
      style={{
        fontFamily: 'BeVietnamPro-Regular',
        fontWeight: 600,
        fontSize: 15,
        color: Colors.black,
        ...style,
      }}>
      {children}
    </Text>
  );
}

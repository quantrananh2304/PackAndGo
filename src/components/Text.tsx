import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { Colors } from '~/themes';

type TextProps = {
  style?: any;
  text: string;
};

export default function AppText({ style, text }: TextProps) {
  return (
    <Text
      style={{
        fontFamily: 'BeVietnamPro-Regular',
        fontWeight: 600,
        fontSize: 15,
        color: Colors.black,
        ...style,
      }}>
      {text}
    </Text>
  );
}

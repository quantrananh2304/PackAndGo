import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

type TextProps = {
  style?: any;
  text: string;
};

export default function AppText({ style, text }: TextProps) {
  return (
    <Text style={{ fontFamily: 'BeVietnamPro-Regular', ...style }}>{text}</Text>
  );
}

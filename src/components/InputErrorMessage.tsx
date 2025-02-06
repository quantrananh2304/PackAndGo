/** @format */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import AppText from './Text';

type Props = {
  text: string;
  visible: boolean;
  style?: ViewStyle;
  numberOfLines?: number;
};

function ErrorMessage({ text, visible, style, numberOfLines = 1 }: Props) {
  if (!visible || !text) {
    return null;
  }

  return (
    <View style={[styles.errorContainer, style]}>
      <AppText>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ErrorMessage;

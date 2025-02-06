import React from 'react';
import AppText from './Text';
import { Colors, Fonts } from '~/themes';
import { StyleSheet, View } from 'react-native';

type Props = {
  containerStyle?: any;
  greetingText?: string;
  welcomeText?: string;
};

export default function GreetingText({
  containerStyle = {},
  greetingText = 'Hi mate,',
  welcomeText = 'Welcome to Travel!',
}: Props) {
  return (
    <View style={containerStyle}>
      <AppText style={style.greeting}>{greetingText}</AppText>

      <AppText style={style.welcome}>{welcomeText}</AppText>
    </View>
  );
}

const style = StyleSheet.create({
  greeting: {
    fontWeight: Fonts.fontWeight.semiBold,
    fontSize: 20,
    color: Colors.grey,
  },

  welcome: {
    fontWeight: Fonts.fontWeight.bold,
    fontSize: 28,
    color: Colors.black,
  },
});

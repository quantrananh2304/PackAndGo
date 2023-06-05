import React from 'react';
import AppText from './Text';
import { Colors } from '~/themes';
import { View } from 'react-native';

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
      <AppText style={style.greeting} text={greetingText} />

      <AppText style={style.welcome} text={welcomeText}></AppText>
    </View>
  );
}

const style = {
  greeting: {
    fontWeight: 500,
    fontSize: 20,
    color: Colors.grey,
  },

  welcome: {
    fontWeight: 600,
    fontSize: 28,
    color: Colors.black,
  },
};

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from './Text';
import { logo } from '~/assets/images';
import { Colors, Fonts } from '~/themes';

type Props = {
  containerStyle?: any;
  logoStyle?: any;
  textStyle?: any;
};

export default function LogoAndText({
  containerStyle = {},
  logoStyle = {},
  textStyle = {},
}: Props) {
  return (
    <View style={{ ...style.container, ...containerStyle }}>
      <Image style={{ ...style.logo, ...logoStyle }} source={logo} />

      <AppText style={{ ...style.packAndGo, ...textStyle }}>Pack&Go</AppText>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: 'auto',
    width: 100,
    height: 100,
  },

  packAndGo: {
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: Fonts.fontWeight.bold,
    fontSize: 30,
    lineHeight: 42,
    color: Colors.purple,
    fontFamily: Fonts.fontFamily,
  },
});

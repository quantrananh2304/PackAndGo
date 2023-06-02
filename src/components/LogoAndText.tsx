import React from 'react';
import { Image, View } from 'react-native';
import AppText from './Text';
import { logo } from '~/assets/images';

type Props = {
  containerStyle?: any;
};

export default function LogoAndText({ containerStyle }: Props) {
  return (
    <View style={{ ...style.container, ...containerStyle }}>
      <Image style={style.logo} source={logo} />

      <AppText style={style.packAndGo} text="Pack&Go"></AppText>
    </View>
  );
}

const style = {
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
    fontWeight: 600,
    fontSize: 30,
    lineHeight: 42,
    color: '#5C42E3',
    fontFamily: 'BeVietnamPro-Regular',
  },
};

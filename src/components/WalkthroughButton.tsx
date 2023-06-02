import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from './Text';
import { Colors } from '~/themes';

type Props = {
  buttonText?: string;
  buttonOnPress: () => void;
  onSkipPress: () => void;
};

export default function WalkthroughButton({
  buttonText = 'Next',
  onSkipPress,
  buttonOnPress,
}: Props) {
  return (
    <View>
      <View style={style.buttonShadow}>
        <LinearGradient
          colors={['#5C42E3', '#9342E3']}
          style={style.buttonContainer}>
          <TouchableOpacity style={style.buttonContent} onPress={buttonOnPress}>
            <AppText style={style.buttonText} text={buttonText}></AppText>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <TouchableOpacity onPress={onSkipPress}>
        <AppText style={style.skip} text="Skip" />
      </TouchableOpacity>
    </View>
  );
}

const style = {
  buttonShadow: {
    shadowColor: '#5C42E3',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
  },

  buttonContainer: {
    borderRadius: 12,
    marginTop: 24,
  },

  buttonContent: {
    height: 52,
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 127,
  },

  buttonText: {
    fontFamily: 'BeVietnamPro-Regular',
    fontWeight: 600,
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
  },

  skip: {
    marginTop: 32,
    fontFamily: 'BeVietnamPro-Regular',
    fontWeight: 600,
    fontSize: 15,
    color: '#8E8E93',
    textAlign: 'center',
  },
};

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from './Text';
import { Colors, Fonts } from '~/themes';

type Props = {
  buttonText?: string;
  buttonOnPress: () => void;
  onSkipPress: () => void;
  disabled?: boolean;
};

export default function WalkthroughButton({
  buttonText = 'Next',
  onSkipPress,
  buttonOnPress,
  disabled = false,
}: Props) {
  return (
    <View>
      <View style={[style.buttonShadow, disabled && style.noShadow]}>
        <LinearGradient
          colors={[Colors.gradientStart, Colors.gradientEnd]}
          style={style.buttonContainer}>
          <TouchableOpacity style={[style.buttonContent, disabled && style.buttonDisabled]} onPress={buttonOnPress} disabled={disabled}>
            <AppText style={style.buttonText}>{buttonText}</AppText>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <TouchableOpacity onPress={onSkipPress}>
        <AppText style={style.skip}>Skip</AppText>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  buttonShadow: {
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
  },

  noShadow: {
    shadowOpacity: 0,
  },

  buttonContainer: {
    borderRadius: 12,
    marginTop: 24,
  },

  buttonContent: {
    height: 52,
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 127,
  },

  buttonText: {
    fontFamily: Fonts.fontFamily,
    fontWeight: Fonts.fontWeight.bold,
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
  },

  buttonDisabled: {
    backgroundColor: Colors.purple_disabled,
  },

  skip: {
    marginTop: 32,
    fontFamily: Fonts.fontFamily,
    fontWeight: Fonts.fontWeight.bold,
    fontSize: 15,
    color: Colors.grey,
    textAlign: 'center',
  },
});

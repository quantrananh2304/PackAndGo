import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from './Text';
import { Colors } from '~/themes';
import { useFormikContext } from 'formik';

type Props = {
  buttonText: string;
  buttonStyle?: any;
  buttonOnPress?: (...args: any) => void;
  textStyle?: any;
  disabled?: boolean;
};

export default function Button({
  buttonText,
  buttonStyle = {},
  buttonOnPress = () => {},
  textStyle = {},
  disabled = false,
}: Props) {
  const form = useFormikContext();

  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={{ ...style.buttonStyle, ...buttonStyle }}
        onPress={form ? form.handleSubmit : buttonOnPress}>
        <AppText style={{ ...style.textStyle, ...textStyle }}>
          {buttonText}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.purple,
    paddingVertical: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowColor: Colors.purple,
  },

  textStyle: {
    color: Colors.white,
    textAlign: 'center',
  },
});

import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Image,
  KeyboardTypeOptions,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors, Fonts } from '~/themes';
import ErrorMessage from './InputErrorMessage';
import { closeIcon } from '~/assets/icons';

const _ = require('lodash');

type Props = {
  placeholderTextColor?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  inputStyle?: any;
  name: string;
  enableValidateOnBlur?: boolean;
  isShowErrMsg?: boolean;
  containerStyle?: any;
  isShowClearButton?: boolean;
  rightIconStyle?: any;
  secureTextEntry?: boolean;
};

export default function Input({
  placeholderTextColor = Colors.grey,
  placeholder = '',
  keyboardType = 'default',
  inputStyle = {},
  name = '',
  enableValidateOnBlur = false,
  isShowErrMsg = false,
  containerStyle = {},
  isShowClearButton = false,
  rightIconStyle = {},
  secureTextEntry = false,
}: Props) {
  const { values, errors, validateField, setFieldValue } = useFormikContext();

  const errorMessage = _.get(errors, name, undefined);

  const isError = errorMessage !== undefined;

  const [isFocusing, setIsFocusing] = useState<boolean>(false);

  function handleBlur() {
    if (enableValidateOnBlur) {
      validateField(name);
    }

    setIsFocusing(false);
  }

  function onChangeText(text: string) {
    setFieldValue(name, text);
  }

  return (
    <View style={containerStyle}>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        style={{
          ...style.inputStyle,
          ...inputStyle,
          borderColor:
            isError && _.get(values, name)
              ? 'red'
              : isFocusing
              ? Colors.purple
              : inputStyle.borderColor || 'black',
          borderWidth: isError || isFocusing ? 1 : inputStyle.borderWidth || 0,
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        onFocus={() => setIsFocusing(true)}
        value={_.get(values, name, undefined)}
        secureTextEntry={secureTextEntry}
      />

      {isShowErrMsg && <ErrorMessage text={errorMessage} visible={isError} />}

      {isShowClearButton && _.get(values, name) && (
        <TouchableWithoutFeedback
          style={{ backgroundColor: 'red', width: 100, height: 100 }}
          onPress={() => setFieldValue(name, '')}>
          <Image
            source={closeIcon}
            style={{ ...style.rightIconStyle, ...rightIconStyle }}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const style = {
  inputStyle: {
    width: '100%',
    height: 55,
    borderRadius: 12,
    backgroundColor: Colors.grey_lighter,
    paddingTop: 18,
    paddingLeft: 24,
    paddingBottom: 16,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: Fonts.fontFamily,
  },
  rightIconStyle: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: 22,
    right: 22,
  },
};

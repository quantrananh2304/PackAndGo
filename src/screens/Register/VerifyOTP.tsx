import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppText, Button, Form } from '~/components';
import { Colors, Fonts, Metrics } from '~/themes';
import * as Yup from 'yup';
import { Screen } from '~/navigations';

const CODE_LENGTH = 4;

export default function VerifyOTP({ route, navigation }: any) {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState('');

  const ref = useRef<TextInput>(null);

  const handleOnPress = () => {
    ref?.current?.focus();
  };

  const codeDigitsArray = new Array(CODE_LENGTH).fill(0);

  const toDigitInput = (_value: number, idx: number) => {
    const emptyInputChar = ' ';
    const digit = code[idx] || emptyInputChar;

    const inputStyle = {
      width: 52,
      height: 52,
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: Colors.grey_lightest,
      borderWidth: 1,
    };

    if (idx === 0 || code[idx] || (idx >= 1 && code[idx - 1])) {
      inputStyle.borderColor = Colors.purple;
    }

    return (
      <View key={idx} style={inputStyle}>
        <AppText style={style.code}>{digit}</AppText>
      </View>
    );
  };

  const onSubmit = (values: any, helpers: any) => {
    setLoading(() => true);

    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: Screen.Interest }] });
      setLoading(() => false);
    }, 2000);
  };

  const onChangeText = (values: any) => {
    setCode(values);

    if (values.length === 4) {
      setDisabled(() => false);
    } else {
      setDisabled(() => true);
    }
  };

  useEffect(() => {
    handleOnPress();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Metrics.isIOS ? 'padding' : 'height'}
      style={{ height: '100%' }}>
      <View style={style.container}>
        <View>
          <AppText style={{ fontSize: 22, textAlign: 'center' }}>
            Verification Code
          </AppText>

          <AppText
            style={{
              marginTop: 16,
              textAlign: 'center',
              fontSize: 14,
              color: Colors.grey,
              fontWeight: 400,
            }}>
            An OTP has been sent to{' '}
            <AppText style={{ color: Colors.red, fontSize: 14 }}>
              {route.params.phoneNumber
                .split('')
                .map((el: string, index: number) => (index < 6 ? '*' : el))
                .join('') || ''}
            </AppText>
          </AppText>

          <AppText
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: Colors.grey,
              fontWeight: 400,
            }}>
            Please verify the code below.
          </AppText>

          <Pressable style={style.inputsContainer} onPress={handleOnPress}>
            {codeDigitsArray.map(toDigitInput)}
          </Pressable>

          <TextInput
            ref={ref}
            value={code}
            onChangeText={onChangeText}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            maxLength={CODE_LENGTH}
            style={style.hiddenCodeInput}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 24,
            }}>
            <AppText style={{ color: Colors.grey }}>
              Haven’t received code?
            </AppText>

            <TouchableOpacity style={{ marginLeft: 4 }}>
              <AppText style={{ color: Colors.purple }}>Re-send</AppText>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Form
            initialValues={{}}
            onSubmit={onSubmit}
            validationSchema={Yup.object().shape({})}>
            <Button
              disabled={disabled || loading}
              buttonStyle={
                disabled || loading
                  ? {
                      marginBottom: 24,
                      shadowOpacity: 0,
                      backgroundColor: Colors.purple_lighter,
                    }
                  : { marginBottom: 24 }
              }
              buttonText="Next"
            />
          </Form>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingBottom: 58,
    display: 'flex',
    backgroundColor: Colors.white,
    paddingTop: 44,
    justifyContent: 'space-between',
  },

  inputsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 24,
  },

  hiddenCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },

  code: {
    fontSize: 20,
    fontWeight: Fonts.fontWeight.semiBold,
  },
});

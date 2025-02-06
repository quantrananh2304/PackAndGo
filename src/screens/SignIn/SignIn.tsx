import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import {
  AppText,
  Button,
  Form,
  GreetingText,
  Input,
  LogoAndText,
} from '~/components';
import { Colors, Metrics } from '~/themes';
import * as Yup from 'yup';
import { Screen } from '~/navigations';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Please enter your phone number')
    .matches(/(^84|^0)[0-9]{9}$/i, 'Invalid phone number'),
});

export default function SignIn({ navigation }: any) {
  const onSubmit = (values: any, helpers: any) => {
    if (values.phoneNumber) {
      setLoading(() => true);
      setTimeout(() => {
        setLoading(() => false);
        navigation.navigate(Screen.InputPassword);
      }, 3000);
    }
  };

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onValidate = (values: any) => {
    if (
      values.phoneNumber &&
      new RegExp(/(^84|^0)[0-9]{9}$/i).test(values.phoneNumber)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleNavigateRegister = () => {
    navigation.reset({ index: 0, routes: [{ name: Screen.Register }] });
  };

  return (
    <KeyboardAvoidingView behavior={Metrics.isIOS ? 'padding' : 'height'}>
      <View style={style.container}>
        <LogoAndText
          containerStyle={style.logoAndText.container}
          logoStyle={style.logoAndText.logo}
          textStyle={style.logoAndText.text}
        />

        <View>
          <GreetingText containerStyle={style.greeting} />

          <AppText style={style.label}>Phone number</AppText>

          <Form
            initialValues={{ phoneNumber: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
            validate={onValidate}>
            <Input
              placeholder="Enter your phone number"
              inputStyle={style.input}
              keyboardType="numeric"
              name="phoneNumber"
              isShowClearButton={true}
            />

            <Button
              disabled={disabled || loading}
              buttonStyle={
                disabled || loading
                  ? style.button.disabled
                  : style.button.active
              }
              buttonText="Next"
            />
          </Form>

          <View style={style.register.container}>
            <AppText style={{ color: Colors.grey }}>
              Don't have account?
            </AppText>

            <TouchableOpacity
              style={{ marginLeft: 4 }}
              onPress={handleNavigateRegister}>
              <AppText style={{ color: Colors.purple }}>Register here</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const style = {
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingBottom: 58,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },

  logoAndText: {
    container: {
      width: '100%',
      marginTop: 92,
      height: 108,
    },

    logo: {
      width: 60,
      height: 60,
    },

    text: {
      fontSize: 24,
      marginTop: 12,
    },
  },

  greeting: {
    marginBottom: 40,
  },

  label: {
    marginBottom: 8,
  },

  input: {
    marginBottom: 24,
  },

  button: {
    disabled: {
      marginBottom: 24,
      shadowOpacity: 0,
      backgroundColor: Colors.purple_lighter,
    },

    active: {
      marginBottom: 24,
    },
  },

  register: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
};

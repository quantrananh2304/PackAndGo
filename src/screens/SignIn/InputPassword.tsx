import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View, StyleSheet } from 'react-native';
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
  password: Yup.string().required('Please enter your password'),
});

export default function InputPassword({ navigation }: any) {
  const onSubmit = (values: any) => {
    if (values.password) {
      setLoading(() => true);
      setTimeout(() => {
        setLoading(() => false);
        navigation.reset({ index: 0, routes: [{ name: Screen.Home }] });
      }, 3000);
    }
  };

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onValidate = (values: any) => {
    if (values.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Metrics.isIOS ? 'padding' : 'height'}>
      <View style={styles.container}>
        <LogoAndText
          containerStyle={styles.logoContainer}
          logoStyle={styles.logo}
          textStyle={styles.logoText}
        />

        <View>
          <GreetingText
            greetingText="Welcome back,"
            welcomeText="Tran Anh Quan!"
            containerStyle={styles.greetingContainer}
          />

          <AppText style={styles.passwordLabel}>Password</AppText>

          <Form
            initialValues={{ phoneNumber: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
            validate={onValidate}>
            <Input
              placeholder="Enter your password"
              inputStyle={styles.input}
              keyboardType="default"
              name="password"
              isShowClearButton={true}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <AppText style={styles.forgotPasswordText}>
                Forgot password?
              </AppText>
            </TouchableOpacity>

            <Button
              disabled={disabled || loading}
              buttonStyle={[
                styles.button,
                (disabled || loading) && styles.disabledButton,
              ]}
              buttonText="Next"
            />
          </Form>

          <View style={styles.registerContainer}>
            <AppText style={styles.registerText}>
              Don't have account?
            </AppText>

            <TouchableOpacity
              style={styles.registerLinkContainer}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: Screen.Register }],
                })
              }>
              <AppText style={styles.registerLink}>Register here</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingBottom: 58,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  logoContainer: {
    width: '100%',
    marginTop: 92,
    height: 108,
  },
  logo: {
    width: 60,
    height: 60,
  },
  logoText: {
    fontSize: 24,
    marginTop: 12,
  },
  greetingContainer: {
    marginBottom: 40,
  },
  passwordLabel: {
    marginBottom: 8,
  },
  input: {
    marginBottom: 8,
  },
  forgotPasswordContainer: {
    width: '100%',
    marginBottom: 24,
  },
  forgotPasswordText: {
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '400',
  },
  button: {
    marginBottom: 24,
  },
  disabledButton: {
    shadowOpacity: 0,
    backgroundColor: Colors.purple_lighter,
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: Colors.grey,
  },
  registerLinkContainer: {
    marginLeft: 4,
  },
  registerLink: {
    color: Colors.purple,
  },
});

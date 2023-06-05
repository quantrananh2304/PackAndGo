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

  return (
    <KeyboardAvoidingView behavior={Metrics.isIOS ? 'padding' : 'height'}>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingHorizontal: 16,
          paddingBottom: 58,
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: Colors.white,
        }}>
        <LogoAndText
          containerStyle={{
            width: '100%',
            marginTop: 92,
            height: 108,
          }}
          logoStyle={{ width: 60, height: 60 }}
          textStyle={{ fontSize: 24, marginTop: 12 }}
        />

        <View>
          <GreetingText
            greetingText="Welcome back,"
            welcomeText="Tran Anh Quan!"
            containerStyle={{ marginBottom: 40 }}
          />

          <AppText style={{ marginBottom: 8 }} text="Password" />

          <Form
            initialValues={{ phoneNumber: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}>
            <Input
              placeholder="Enter your password"
              inputStyle={{ marginBottom: 8 }}
              keyboardType="default"
              name="password"
              setDisabled={setDisabled}
              isShowClearButton={true}
              secureTextEntry={true}
            />

            <TouchableOpacity style={{ width: '100%', marginBottom: 24 }}>
              <AppText
                text="Forgot password?"
                style={{ textAlign: 'right', fontSize: 14, fontWeight: 400 }}
              />
            </TouchableOpacity>

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

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AppText
              style={{ color: Colors.grey }}
              text="Don't have account?"
            />

            <TouchableOpacity style={{ marginLeft: 4 }}>
              <AppText text="Register here" style={{ color: Colors.purple }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

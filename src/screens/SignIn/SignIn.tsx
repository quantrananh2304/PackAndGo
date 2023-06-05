import { FormikHelpers, useFormikContext } from 'formik';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
          <GreetingText containerStyle={{ marginBottom: 40 }} />

          <AppText style={{ marginBottom: 8 }} text="Phone number" />

          <Form
            initialValues={{ phoneNumber: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}>
            <Input
              placeholder="Enter your phone number"
              inputStyle={{ marginBottom: 24 }}
              keyboardType="numeric"
              name="phoneNumber"
              setDisabled={setDisabled}
              isShowClearButton={true}
            />

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
              // buttonOnPress={onSubmit}
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

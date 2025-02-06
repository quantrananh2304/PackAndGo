import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { leftArrow } from '~/assets/icons';
import { AppText } from '~/components';
import { Screen } from '~/navigations';
import {
  Home,
  Interest,
  Register,
  SignIn,
  VerifyOTP,
  WalkThroughFirst,
  WalkThroughSecond,
  WalkThroughThird,
} from '~/screens';
import InputPassword from '~/screens/SignIn/InputPassword';
import { Colors } from '~/themes';

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Screen.VerifyOTP}>
      {/* walkthrough */}
      <Stack.Screen name={Screen.First} component={WalkThroughFirst} />
      <Stack.Screen name={Screen.Second} component={WalkThroughSecond} />
      <Stack.Screen name={Screen.Third} component={WalkThroughThird} />

      {/* sign in */}
      <Stack.Screen name={Screen.SignIn} component={SignIn} />
      <Stack.Screen name={Screen.InputPassword} component={InputPassword} />

      {/* register */}
      <Stack.Screen name={Screen.Register} component={Register} />
      <Stack.Screen
        name={Screen.VerifyOTP}
        component={VerifyOTP}
        initialParams={{ phoneNumber: '0365241574' }}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitle: props => (
            <AppText style={{ fontWeight: 700 }}>OTP</AppText>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.pop()}
              style={{
                width: 36,
                height: 36,
                backgroundColor: Colors.grey_lighter,
                borderRadius: 8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={leftArrow} style={{ width: 16, height: 16 }} />
            </Pressable>
          ),
          headerShown: true,
        })}
      />
      <Stack.Screen name={Screen.Interest} component={Interest} />

      {/* home */}
      <Stack.Screen name={Screen.Home} component={Home} />
    </Stack.Navigator>
  );
}

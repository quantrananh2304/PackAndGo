import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Screen } from '~/navigations';
import {
  Home,
  SignIn,
  WalkThroughFirst,
  WalkThroughSecond,
  WalkThroughThird,
} from '~/screens';
import InputPassword from '~/screens/SignIn/InputPassword';

const Stack = createNativeStackNavigator();

export default function WalkThrough() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* walkthrough */}
      <Stack.Screen name={Screen.First} component={WalkThroughFirst} />
      <Stack.Screen name={Screen.Second} component={WalkThroughSecond} />
      <Stack.Screen name={Screen.Third} component={WalkThroughThird} />

      {/* sign in */}
      <Stack.Screen name={Screen.SignIn} component={SignIn} />
      <Stack.Screen name={Screen.InputPassword} component={InputPassword} />

      {/* home */}
      <Stack.Screen name={Screen.Home} component={Home} />
    </Stack.Navigator>
  );
}

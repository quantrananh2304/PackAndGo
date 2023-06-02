import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Screen } from '~/navigations';
import {
  SignIn,
  WalkThroughFirst,
  WalkThroughSecond,
  WalkThroughThird,
} from '~/screens';

const Stack = createNativeStackNavigator();

export default function WalkThrough() {
  return (
    <Stack.Navigator>
      {/* walkthrough */}
      <Stack.Screen
        name={Screen.First}
        component={WalkThroughFirst}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.Second}
        component={WalkThroughSecond}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.Third}
        component={WalkThroughThird}
        options={{ headerShown: false }}
      />

      {/* sign in */}
      <Stack.Screen
        name={Screen.SignIn}
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

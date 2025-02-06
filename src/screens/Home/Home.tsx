import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppText } from '~/components';

export default function Home({ navigation }: any) {
  return (
    <SafeAreaView>
      <AppText>Home</AppText>
    </SafeAreaView>
  );
}

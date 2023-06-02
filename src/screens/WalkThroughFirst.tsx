import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { LogoAndText } from '~/components';
import { Screen } from '~/navigations';

type Props = {
  navigation: any;
};

export default function WalkThroughFirst({ navigation }: Props) {
  useEffect(() => {
    setTimeout(() => navigation.replace(Screen.Second), 1000);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <LogoAndText />
    </SafeAreaView>
  );
}

import React from 'react';
import { Image, View } from 'react-native';
import { walkthroughWelcome } from '~/assets/images';
import { AppText, GreetingText, WalkthroughButton } from '~/components';
import { Screen } from '~/navigations';
import { Colors } from '~/themes';

export default function WalkThroughSecond({ navigation }: { navigation: any }) {
  return (
    <View style={style.container}>
      <Image source={walkthroughWelcome} style={style.image} />

      <View>
        <GreetingText />

        <AppText style={style.description}>
          Life is short, the world is wide. Then give yourself a day off,
          discover the best lovely places, plan a trip, and spend some time away
          from familiar routines with your friends.
        </AppText>

        <WalkthroughButton
          buttonText="Get Started"
          buttonOnPress={() =>
            navigation.reset({ index: 0, routes: [{ name: Screen.Third }] })
          }
          onSkipPress={() =>
            navigation.reset({ index: 0, routes: [{ name: Screen.SignIn }] })
          }
        />
      </View>
    </View>
  );
}

const style = {
  container: {
    backgroundColor: Colors.white,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },

  image: {
    width: 530,
    height: 660,
    marginTop: '-55%',
  },

  description: {
    fontFamily: 'BeVietnamPro-Regular',
    fontWeight: 400,
    fontSize: 15,
    color: Colors.grey,
    marginTop: 24,
  },
};

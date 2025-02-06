import React, { useMemo, useState } from 'react';
import { Image, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  walkthroughAdventure,
  walkthroughExplore,
  walkthroughPlan,
} from '~/assets/images';
import {
  AppText,
  WalkthroughButton,
  WalkthroughPagination,
} from '~/components';
import { Screen } from '~/navigations';
import { Colors, Metrics } from '~/themes';

export default function WalkThroughThird({ navigation }: { navigation: any }) {
  console.log('nav', navigation);
  const [active, setActive] = useState<number>(0);
  const content = useMemo(() => {
    return [
      {
        image: walkthroughExplore,
        title: 'Explore Destinations',
        content:
          "A whole new world you didn't know you are passionate about is waiting to be explored",
      },
      {
        image: walkthroughPlan,
        title: 'Plan your trips',
        content:
          'Select your dream destinations, add some detail notes. You’re half way there!',
      },
      {
        image: walkthroughAdventure,
        title: 'Start your adventures',
        content:
          'Pack up, go outside and fill your memories with unforgettable experiences ',
      },
    ];
  }, []);

  const handleGestureEvent = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      console.log('Swipe gesture completed');
      // Perform your desired actions here
    }
  };

  return (
    <View style={style.container}>
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <Image source={content[active].image} style={style.image} />
      </PanGestureHandler>

      <WalkthroughPagination active={active} />

      <View>
        <View style={{ marginTop: 69 }}>
          <AppText
            style={{
              fontWeight: 600,
              fontSize: 22,
              color: Colors.black,
              textAlign: 'center',
            }}>
            {content[active].title}
          </AppText>

          <AppText
            style={{
              color: Colors.grey,
              fontWeight: 400,
              fontSize: 15,
              marginTop: 16,
              textAlign: 'center',
            }}>
            {content[active].content}
          </AppText>
        </View>

        <WalkthroughButton
          buttonOnPress={() => {
            if (active < 2) {
              setActive(prev => prev + 1);
            } else {
              navigation.reset({ index: 0, routes: [{ name: Screen.SignIn }] });
            }
          }}
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

  image: { width: Metrics.screenWidth, height: '60%' },
};

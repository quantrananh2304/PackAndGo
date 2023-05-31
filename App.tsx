/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { logo } from '~/assets/images';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View style={style.container}>
          <Image style={style.logo} source={logo} />

          <Text style={style.packAndGo}>Pack&Go</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const style = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: 'auto',
    width: 100,
    height: 100,
  },

  packAndGo: {
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 30,
    lineHeight: 42,
    color: '#5C42E3',
    fontFamily: 'BeVietnamPro-Regular',
  },
};

export default App;

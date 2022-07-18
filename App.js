
import React from 'react';
// import MainPage from './pages/MainPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './res/navigation/Navigator';

import { useFonts } from '@expo-google-fonts/inter'

export default function App() {

  console.disableYellowBox = true;

  let [fontsLoaded] = useFonts({
    '돋움': require('./res/assets/fonts/mg.ttf'),
  });

  return ( 
  <NavigationContainer>
    <StatusBar style="gray" />
    <Navigator/>
 </NavigationContainer>);
}













// expo install firebase 추가.
// firebaseConfig.js 생성 > fireBase 제공 코드 추가 
//

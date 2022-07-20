
import React, {useReducer} from 'react';
// import MainPage from './pages/MainPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './res/navigation/Navigator';

import { useFonts } from '@expo-google-fonts/inter'

import SplashScreen from './res/components/SplashScreen';

export const Dispatch = React.createContext(null);

export default function App() {

  console.disableYellowBox = true;

  // 폰트 로딩
  let [fontsLoaded] = useFonts({
    '돋움': require('./res/assets/fonts/mg.ttf'),
  });
  // 이미지 로딩

  
 if (!fontsLoaded) return <SplashScreen />

  return (  

      <NavigationContainer>
        <StatusBar style="gray" />
        <Navigator/>
      </NavigationContainer>
 );
}













// expo install firebase 추가.
// firebaseConfig.js 생성 > fireBase 제공 코드 추가 
//

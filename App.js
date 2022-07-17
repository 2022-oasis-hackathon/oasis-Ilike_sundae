
import React from 'react';
// import MainPage from './pages/MainPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './res/navigation/Navigator';


export default function App() {

  console.disableYellowBox = true;


  return ( 
  <NavigationContainer>
    <StatusBar style="gray" />
    <Navigator/>
 </NavigationContainer>);
}













// expo install firebase 추가.
// firebaseConfig.js 생성 > fireBase 제공 코드 추가 
//

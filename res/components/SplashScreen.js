import { View, Text, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }} >
      <Image source={{uri: 'https://ifh.cc/g/RlR025.png', width: 200, height: 200}} />
      <Text style={{ fontSize: 18, color: 'black'}} >SplashScreen</Text>
    </View>
  )
}

export default SplashScreen
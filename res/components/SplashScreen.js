import { View, Text } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }} >
      <Text style={{ fontSize: 18, color: 'white'}} >SplashScreen</Text>
    </View>
  )
}

export default SplashScreen
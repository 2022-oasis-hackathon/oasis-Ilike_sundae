import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  )
}

export default Layout
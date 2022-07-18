import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useNavigation } from '@react-navigation/native'

const Favorites = () => {
    const navigate = useNavigation()
    


  return (
    <Layout>
      <Text>Favorites</Text>
    </Layout>
  )
}

export default Favorites
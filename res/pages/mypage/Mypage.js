import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

const Mypage = () => {

  useEffect(() => {
    console.log("Q")
  }, [])
 
  return (
    <Layout>
      <Text>Mypage</Text>
    </Layout>
  )
}

export default Mypage
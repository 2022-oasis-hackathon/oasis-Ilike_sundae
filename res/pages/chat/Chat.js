import { View, Text, Image } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout'
import { ScrollView } from 'react-native-gesture-handler'
import ChatCard from '../../components/ChatCard'

const Chat = () => {
  return (
    <ScrollView>
      <Layout>
        <ChatCard />
      </Layout>
    </ScrollView>
  )
}

export default Chat
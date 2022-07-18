import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout'
import { TextInput } from 'react-native-gesture-handler'
import StoreWrite from './StoreWrite'
import ChatWrite from './ChatWrite'
import CommunityWrite from './CommunityWrite'

const PREV_PAGE = [
  "StoreNavigator",
  "ChatNavigation",
  "CommunityNavigator"
]

const Write = ({ navigation, route }) => {
  switch (route.params.prevPage) {
    case PREV_PAGE[0]:
      return (
        <StoreWrite />
      )
    case PREV_PAGE[1]:
      return (
        <ChatWrite />
      )
    case PREV_PAGE[2]:
      return (
        <CommunityWrite />
      )
    default:
      return (
        <CommunityWrite />
      )
  }
}

export default Write
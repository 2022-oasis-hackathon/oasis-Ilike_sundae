import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailPage from '../pages/store/DetailPage';
import MainPage from '../pages/store/MainPage';
import AboutPage from '../pages/store/AboutPage';
import LikePage from '../pages/store/LikePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// bottom tap page
import Chat from '../pages/chat/Chat'
import Store from '../pages/store/Store';
import Write from '../pages/write/Write'
import Community from '../pages/community/Community'
import Mypage from '../pages/mypage/Mypage'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MypageNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
        }}    
        >
            <Stack.Screen name='Mypage' component={Mypage} />
        </Stack.Navigator>
    )
}

const CommunityNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}    
        >
            <Stack.Screen name='Community' component={Community} />
        </Stack.Navigator>
    )
}

const ChatNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}      
        >
            <Stack.Screen name='Chat' component={Chat} />
        </Stack.Navigator>
    )
}

const StoreNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height:100
                },
                headerTitleAlign:'left',
                headerTintColor: "#000",
                headerBackTitleVisible: false
            }}
            
        >
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
            <Stack.Screen name="AboutPage" component={AboutPage}/>
            <Stack.Screen name="LikePage" component={LikePage}/>
        </Stack.Navigator>
    )
}

const BottomTapNavigator = () => {
    return (
        <Tab.Navigator
        // tabBar 속성으로 ui 커스텀해야함
            screenOptions={{
                headerShown: false
            }}    
        >
            <Tab.Screen name='StoreNavigator' component={StoreNavigator} options={{ title: '스토어' }} />
            <Tab.Screen name='ChatNavigation' component={ChatNavigation} options={{ title: '채팅' }} />
            <Tab.Screen name='Write' component={Write} options={{ title: '' }} />
            <Tab.Screen name='CommunityNavigator' component={CommunityNavigator} options={{ title: '커뮤니티' }} />
            <Tab.Screen name='MypageNavigator' component={MypageNavigator} options={{ title: '내정보' }} />
        </Tab.Navigator>
    )
}

export default BottomTapNavigator;
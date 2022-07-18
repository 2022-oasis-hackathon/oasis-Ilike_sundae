import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components
import Header from '../components/Header';

// page
import DetailPage from '../pages/store/DetailPage';
import MainPage from '../pages/store/MainPage';
import AboutPage from '../pages/store/AboutPage';
import LikePage from '../pages/store/LikePage';

// bottom tap page
import Chat from '../pages/chat/Chat'
import Write from '../pages/write/Write'
import Mypage from '../pages/mypage/Mypage'
import TabBarContainer from './TabBarContainer';

// MyPage
import ShopCart from '../pages/mypage/ShopCart';
import Favorite from '../pages/mypage/Favorites'

// Community TopTap Page
import Community from '../pages/community/Community'
import Boast from '../pages/community/Boast'
import Ask from '../pages/community/Ask'
import Free from '../pages/community/Free'

// Write Page
import ChatWrite from '../pages/write/ChatWrite'
import CommunityWrite from '../pages/write/CommunityWrite'
import StoreWrite from '../pages/write/StoreWrite'


const Top = createMaterialTopTabNavigator();
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
            <Stack.Screen name='ShopCart' component={ShopCart} />
            <Stack.Screen name='Favorite' component={Favorite} />
        </Stack.Navigator>
    )
}

const CommunityTopTapNavigator = () => {
    return (
        <Top.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor:'#aaa',
                tabBarIndicatorStyle: {borderColor: 'black', borderBottomWidth: 2, marginLeft: 10, width: 60},
                tabBarItemStyle: {width: 80, height: 40}
            }}
        >
            <Top.Screen name='CommunityHome' component={Community} options={{ title: '홈' }} />
            <Top.Screen name='Boast' component={Boast} options={{ title: '자랑 팜' }} />
            <Top.Screen name='Ask' component={Ask} options={{ title: '질문 팜' }} />
            <Top.Screen name='Free' component={Free} options={{ title: '자유 팜' }} />
        </Top.Navigator>
    )
}
const CommunityNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "white",
                },
            }}
        >
            <Stack.Screen name='Community' component={CommunityTopTapNavigator} 
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Header {...props} page={route} navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    )
}

const ChatNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "white",
                },
            }}
        >
            <Stack.Screen name='Chat' component={Chat} 
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Header {...props} page={route} navigation={navigation} />,
                })}
            />
        </Stack.Navigator>
    )
}

const StoreNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    shadowColor: "white",
                },
            }}
            
        >
            <Stack.Screen name="MainPage" component={MainPage}
                options={({ navigation, route }) => ({
                    headerTitle: (props) => <Header {...props} page={route} navigation={navigation} />,
                })}
            />
            <Stack.Screen name="DetailPage" component={DetailPage}/>
            <Stack.Screen name="AboutPage" component={AboutPage}/>
            <Stack.Screen name="LikePage" component={LikePage}/>
        </Stack.Navigator>
    )
}

const BottomTapNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={props => <TabBarContainer {...props}/>}
        >
            <Tab.Screen name='StoreNavigator' component={StoreNavigator} />
            <Tab.Screen name='ChatNavigation' component={ChatNavigation} />
            <Tab.Screen name='Write' component={Write} />
            <Tab.Screen name='CommunityNavigator' component={CommunityNavigator} />
            <Tab.Screen name='MypageNavigator' component={MypageNavigator} />
        </Tab.Navigator>
    )
}

export default BottomTapNavigator;
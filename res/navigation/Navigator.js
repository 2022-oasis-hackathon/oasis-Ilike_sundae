import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

// components
import Header from '../components/Header';

// page
import DetailPage from '../pages/store/DetailPage';
import MainPage from '../pages/store/MainPage';
import AboutPage from '../pages/store/AboutPage';
import LikePage from '../pages/store/LikePage';


import Detail from '../pages/community/Detail'
// bottom tap page
import Chat from '../pages/chat/Chat'
import Write from '../pages/write/Write'
import Mypage from '../pages/mypage/Mypage'
import TabBarContainer from './TabBarContainer';

// MyPage
import ShopCart from '../pages/mypage/ShopCart';
import Favorite from '../pages/mypage/Favorites'
import MyInfo from '../pages/mypage/Myinfo';

// Community TopTap Page
import Community from '../pages/community/Community'
import Boast from '../pages/community/Boast'
import Ask from '../pages/community/Ask'
import Free from '../pages/community/Free'

// Write Page
import ChatWrite from '../pages/write/ChatWrite'
import CommunityWrite from '../pages/write/CommunityWrite'
import StoreWrite from '../pages/write/StoreWrite'
import { TouchableOpacity } from 'react-native';


const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


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
            <Stack.Screen name="DetailPage" component={DetailPage}
                options={{ title: "상품정보", headerBackTitleStyle: { display: 'none' },headerTintColor: 'black', headerRight: () => <TouchableOpacity><Ionicons name='share-outline' size={26} /></TouchableOpacity> }}
            />
            <Stack.Screen name="AboutPage" component={AboutPage}/>
            <Stack.Screen name="LikePage" component={LikePage}/>
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

            <Stack.Screen name='Detail' component={Detail} 
                options={{ headerTintColor: 'black', headerBackTitleStyle: { display: 'none' }, title: '게시글 상세', headerStyle: { borderBottomWidth: 1 } }}
            />
        </Stack.Navigator>
    )
}

const MypageNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleStyle: { display: 'none'},
                headerTintColor: 'black'
            }}
        >
            <Stack.Screen name='Mypage' component={Mypage} 
                options={{ title: '나의 정보' }}
            />
            <Stack.Screen name='ShopCart' component={ShopCart}
                options={{ title: '장바구니' }}
            />
            <Stack.Screen name='Favorite' component={Favorite}
                options={{ title: '찜 목록' }}
            />
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
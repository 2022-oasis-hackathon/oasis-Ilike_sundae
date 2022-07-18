import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


const ROUTE_NAME = [
    '스토어',
    '채팅',
    '글쓰기',
    '커뮤니티',
    '내정보'
]
const WIDTH = Math.floor(Dimensions.get('window').width)
const HEIGHT = Math.floor(Dimensions.get('window').height)

function TabBarContainer({ state, descriptors, navigation }) {
  return (

    <View 
    style={{ flexDirection: 'row',backgroundColor:"transparent",height:80,justifyContent:"center",alignItems:"center", borderTopWidth: 1 }}>
      {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
          options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : ROUTE_NAME[index];
          
          const isFocused = state.index === index;
          
          const onPress = () => {
              const event = navigation.emit({
                  type: 'tabPress',
            target: route.key,
        });
        
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };
    
    const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };
    
        return (
            <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center" }}
            key={index}
            >
                <Text style={{ color: isFocused ? '#673ab7' : '#222' }} >
                    아이콘
                </Text>
                <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
                </Text>
            </TouchableOpacity>
            );
        })}
    </View>
  );
}

export default TabBarContainer
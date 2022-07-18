import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
const ROUTE_NAME = [
    '스토어',
    '채팅',
    '글쓰기',
    '커뮤니티',
    '내정보'
]
function TabBar({ state, descriptors, navigation }) {

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
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
            {label}
        </Text>
        </TouchableOpacity>
    );
}

export default TabBar
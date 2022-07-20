import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Loading(){
    return(<View style={styles.container}><Text style={styles.title}>준비중입니다...</Text></View>)
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#eee',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    title: {
        fontSize:20,
        fontWeight:'700'
    }

})


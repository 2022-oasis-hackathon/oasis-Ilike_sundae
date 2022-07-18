import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReviewCard({content,navigation}){

    let isLike = ()=>{
        
    }
    console.log(content)
    return(
        <SafeAreaView style={styles.cardText}>
                <Text style={styles.cardWritter}>{content.writter}</Text>
                <Text style={styles.cardReply}>{content.reply}</Text>
                
            
            </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
 
    cardWritter: {
        fontSize:20,
        fontWeight:'700',
        color:"#eee"
    },
    cardReply: {
      fontSize:20,
      fontWeight:"700",
        color:"#eee"
    },
    cardDesc: {
      fontSize:15
    },
   
    cardPrice:{
        fontSize:25,
        fontWeight:'400',
        color:"#000",
        alignSelf:"flex-end"
    }
});
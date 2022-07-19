import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

export default function LikeCard({content,navigation}){
    return(
      <TouchableOpacity  onPress={()=>{navigation.navigate('DetailPage',content)}}>
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.imgPath}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.body}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </View>
        </TouchableOpacity>
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
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    }
});
import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'

export default function Card({content,navigation}){

    let isLike = ()=>{
        
    }
    //TODO : 필터기능 / 아이콘 추가 / 

    return(
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('DetailPage',content)}}>
            <Image style={styles.cardImage} source={{uri:content.imgPath}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.text2}>{content.price} / {content.amount}</Text>
                <Text style={styles.dealInfo}>* {content.local}</Text>
                <Text style={styles.cardBody} numberOfLines={2}>{content.body}</Text>
                
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
    cardBody: {
      paddingTop: 2,
      fontSize:15,
      color:"#000",
      paddingRight:5,
    },
    dealInfo:{
      paddingTop:3,
      fontSize:15,
      color:"#888"
    },
    text2:{
        paddingTop:3,
        fontSize:15,
        fontWeight:'500',
        color:"#888"
    }
});
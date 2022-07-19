import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'
import data from '../../../data.json'
export default function AskCard({content,navigation}){

  

    return(
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Detail',content)}}>
         
                <Image style={styles.cardImage} source={{uri:content.img}} />
               
                <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                    <Text style={styles.cardBody} numberOfLines={3}>{content.body}</Text>
                </View>
           

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{

    },
    card:{
      flex:1,
      
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    middleBar:{
      flexDirection:'row',
      justifyContent:'flex-end',
      width:'100%',
      height:20
    },
    cardImage: {
      width:80,
      height:80,
      borderRadius:10,
    },
    cardText: {
      width:230,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:18,
      paddingBottom:4,
      fontWeight:"400"
    },
    cardBody: {
      fontSize:12
    },
   
});
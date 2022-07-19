import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'


export default function FreeCard({content,navigation}){
    return(
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Detail',content)}}>
        
         <View style={styles.cardText}>
            <Text style={styles.writter}>{content.writter}</Text>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                    <Text style={styles.cardBody} numberOfLines={3}>{content.body}</Text>
                </View>

                <Image style={styles.cardImage} source={{uri:content.img}} />
               
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{

    },
    card:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    writter:{
        width:'100%',
        height:30,
        paddingTop:10
    },

    cardImage: {
      alignSelf:'flex-end',
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
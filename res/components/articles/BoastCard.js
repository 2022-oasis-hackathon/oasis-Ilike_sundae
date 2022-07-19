import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'
import data from '../../../data.json'
export default function BoastCard({content,navigation}){

  

    return(
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Detail',content)}}>
           <View style={styles.container}>
                <Image style={styles.cardImage} source={{uri:content.img}} />
                <View style={styles.middleBar}>
                    {/* 좋아요 / 조회수 */}
                      <Text>*</Text><Text>X</Text>
                </View>
                <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                    <Text style={styles.cardBody} numberOfLines={3}>{content.body}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{      
    flexWrap:"wrap", 
    },
    card:{
      flex:1,
      maxWidth:170,
      flexDirection:"column",
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
      flex:1,
      width:'100%',
      height:188,
      borderRadius:10,
    },
    cardText: {
      flex:2,
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
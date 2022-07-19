import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, Dimensions} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width

export default function Card({content,navigation}){

    let isLike = ()=>{
        
    }
    //TODO : 필터기능 / 아이콘 추가 / 
    return(
        // <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('DetailPage',content)}}>
        //     <Image style={styles.cardImage} source={{uri:content.imgPath}}/>
        //     <View style={styles.cardText}>
        //         <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
        //         <Text style={styles.text2}>{content.price} / {content.amount}</Text>
        //         <Text style={styles.dealInfo}>* {content.local}</Text>
        //         <Text style={styles.cardBody} numberOfLines={2}>{content.body}</Text>
                
        //     </View>
        // </TouchableOpacity>

        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 120, width: '100%' }}  onPress={()=>{navigation.navigate('DetailPage',content)}}>
            <Image source={{uri:content.imgPath}} style={{ width: 100, height: 100, borderRadius: 4 }} />
            <View style={{ display: 'flex', marginLeft: 4, justifyContent: 'space-between', height: 100, width: WIDTH-100-42 }}>
                
                <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 2 }} numberOfLines={1}>{content.title}</Text>
                <Text style={{ fontSize: 10, fontWeight: '500', color: '#4f4f4f' }}>{content.price}원 / {content.amount}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 4 }} >
                    <View style={{ display: 'flex', flexDirection: 'row' }} >
                        <Ionicons name='location-outline' size={12} />
                        <Text style={{ fontSize: 10, fontWeight: '500', marginRight: 4, color: '#6f6f6f' }}>{content.local}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'orange', borderRadius: 2, alignItems: 'center',justifyContent:'center', minWidth: 40 }} >
                        <Text style={{ fontSize: 10, fontWeight: '500', color: 'white' }}>직거래</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }} numberOfLines={2}>{content.body}</Text>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <View  style={{ display: 'flex', flexDirection: 'row', marginRight: 4, alignItems: 'center' }} >
                      <Ionicons name='star-outline' size={11} style={{ marginRight: 2 }} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>132</Text>
                    </View>

                    <View  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                      <Ionicons name='chatbubbles-outline' size={12} style={{ marginRight: 2 }} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>10</Text>
                    </View>                
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
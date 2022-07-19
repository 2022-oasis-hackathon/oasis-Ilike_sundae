import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share,FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import {firebase_db} from "../../../firebaseConfig"
import Ionicons from '@expo/vector-icons/Ionicons'

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';



import seedData from '../../../data.json'
import ReviewCard from '../../components/ReviewCard';

export default function DetailPage({navigation,route}) {


    // const like = async () => {
    //     // like 방 안에
    //     // 특정 사용자 방안에
    //     // 특정 좋아요 데이터 아이디 방안에
    //     // 특정 좋아요 데이터 몽땅 저장!
    //     // 좋아요 데이터 방 > 사용자 방 > 어떤 찜인지 아이디
    //     let userUniqueId;
    //     if(isIOS){
    //     let iosId = await Application.getIosIdForVendorAsync(); // 분기처리
    //         userUniqueId = iosId
    //     }else{
    //         userUniqueId = await Application.androidId
    //     }
	//        firebase_db.ref('/like/'+userUniqueId+'/'+ seed.idx).set(seed,function(error){
    //          console.log(error)
    //          Alert.alert("좋아요!")
    //      });
    // }

    // const share = () => {
    //     Share.share({
    //         message:`${seed.title} \n\n ${seed.body} `,
    //     });
    // }

    // const link = (address) => {   //  TODO : 게시물 페이지로 들가는 경로로 추가하기. 
    //     Linking.openURL({address})
    // }

    return ( 
        <View style={{ backgroundColor: 'white' }} >
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri: route.params.imgPath}}/>
           
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, padding: 12, marginBottom: 4 }} >
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} >
                        <Image source={{uri: route.params.imgPath}} style={{ width: 42, height: 42, borderRadius: "50%", marginRight: 4 }} />
                    
                        <View style={{ display: 'flex', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 14, fontWeight: '500' }} >
                                {route.params.writter}
                            </Text>
                            <Text style={{ fontSize: 10, fontWeight: '500', color: '#6f6f6f' }} >
                                {route.params.local}
                            </Text>
                        </View>
                    </View>
                </View>

                <View  style={{ flex: 1, display: "flex", alignItems: 'flex-end', justifyContent: 'center'}} >
                    <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width: 160, height: 42, backgroundColor: '#37C85D', borderRadius: 4}} >
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }} >문의하기</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ display: 'flex', padding: 12, paddingTop: 0}} >
                <View style={{ display: 'flex', marginBottom: 12}} >
                    <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 4, color: "#2f2f2f" }}>{route.params.title}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800', color: '#FF7B00' }}>{route.params.price}원 / {route.params.amount}</Text>
                </View>
                

                <Text style={{ fontSize: 14, fontWeight: '500', color: '#3f3f3f', marginBottom: 8 }}>{route.params.body}</Text>
                
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 16 }} >
                    <View  style={{ display: 'flex', flexDirection: 'row', marginRight: 4, alignItems: 'center' }} >
                      <Ionicons name='star-outline' size={11} style={{ marginRight: 2 }} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>132</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                      <Ionicons name='chatbubbles-outline' size={12} style={{ marginRight: 2 }} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>10</Text>
                    </View>                
                </View>

                {/* <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={()=>like()}><Text style={styles.buttonText}>좋아요</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>share()}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>link(address)}><Text style={styles.buttonText}>외부 링크</Text></TouchableOpacity>
                </View> */}
            </View>
      
            <View style={styles.review}>
            {
                route.params && route.params.review.map((content,i)=>{
                    return (<ReviewCard content={content} key={i} navigation={navigation}/>)
                })
            }
            </View>
        </ScrollView>

        <View style={{ position: 'absolute', bottom: -20,height: 80, display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', padding: 12,  paddingTop: 0, backgroundColor: 'white', borderTopWidth: 1, borderColor: '#d4d4d4', marginBottom: 10 }} >
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', width: '12.5%' }} >
                <Ionicons name='star-outline' size={24} />
            </TouchableOpacity>

            <TouchableOpacity style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', width: '87.5%', backgroundColor: 'orange', height: 42, borderRadius: 4 }} >
                <Text style={{ color: "white", fontSize: 16, fontWeight: '600' }} >구매하기</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    image:{
        width: '100%',
        height: 240,
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color:"#000"
    },
    price:{
        fontSize:16,
        fontWeight:'700',
        paddingLeft: 20,
        color:"#000"

    },
    body:{
        fontSize:20,
        marginTop:10,
        color:"#000"
    },
    buttonGroup: {
        flexDirection:"row",
    },
    button:{
        width:90,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        padding:10,
        borderWidth:1,
        borderColor:'deeppink',
        borderRadius:7
    },
    buttonText:{
        color:'#000',
        textAlign:'center'
    },
    review:{
        borderTopWidth:5,
        borderTopColor:'#eee'
    }
})
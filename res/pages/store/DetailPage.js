import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share,FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import {firebase_db} from "../../../firebaseConfig"

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';



import seedData from '../../../data.json'
import ReviewCard from '../../components/ReviewCard';

export default function DetailPage({navigation,route}) {
// 

const [seed, setSeed] = useState({
    "idx":"1",
        "title":"장수 사과",
        "body":"아따 여기 장수 사과 맛나요 어쩌구 ~ 저쩌구 ~ 어쩌구 ~ 저쩌구 ~어쩌구 ~ 저쩌구 ~어쩌구 ~ 저쩌구 ~어쩌구 ~ 저쩌구 ~",
        "imgPath" : "http://www.smgnews.co.kr/imgdata/smgnews_co_kr/201809/2018091126216113.jpg",
        "writter" : "user1" ,
        "price": "5,000",
        "hit": 0,
        "regdate": "2022-07-09",
        "review":[
            {
                "idx":0,
               "writter": "user1",  
                "reply": "좋네요"
            },
            {
                "idx":1,
                "writter": "user2",  
                 "reply": "별로"
             },
             {
                
                "idx":2,
                "writter": "user3",  
                 "reply": "굿굿"
             },
             {
                "idx":3,
                "writter": "user4",  
                 "reply": "좋네요"
             }
        ]
})

   
useEffect(()=>{
    console.log(route)
   
    //넘어온 데이터는 route.params에 들어 있습니다.
    const { idx } = route.params;
    firebase_db.ref('/seed/'+idx).once('value').then((snapshot) => {
        let seed = snapshot.val();
        setSeed(seed)
    });
},[])

    const like = async () => {
        // like 방 안에
        // 특정 사용자 방안에
        // 특정 좋아요 데이터 아이디 방안에
        // 특정 좋아요 데이터 몽땅 저장!
        // 좋아요 데이터 방 > 사용자 방 > 어떤 찜인지 아이디
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync(); // 분기처리
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }

        console.log(userUniqueId)
	       firebase_db.ref('/like/'+userUniqueId+'/'+ seed.idx).set(seed,function(error){
             console.log(error)
             Alert.alert("좋아요!")
         });
    }


    const share = () => {
        Share.share({
            message:`${seed.title} \n\n ${seed.body} `,
        });
    }

    const link = (address) => {   //  TODO : 게시물 페이지로 들가는 경로로 추가하기. 
        Linking.openURL({address})
    }
    return ( 


        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:seed.imgPath}}/>
           
            <View style={styles.textContainer}>
                <View style={styles.topWrap}>
                    <Text style={styles.title}>{seed.title}</Text>
                    <Text style={styles.price}>{seed.price} 원</Text>
                </View>
                

                <Text style={styles.body}>{seed.body}</Text>
                
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={()=>like()}><Text style={styles.buttonText}>좋아요</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>share()}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>link(address)}><Text style={styles.buttonText}>외부 링크</Text></TouchableOpacity>
                </View>
                
            </View>
      
        <View style={styles.review}>
            {
          seed.review.map((content,i)=>{
            return (<ReviewCard content={content} key={i} navigation={navigation}/>)
          })
        }
            </View>
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    image:{
        height:200,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:20,
        justifyContent:'flex-start'
    },
    topWrap:{
        flex:1,
        flexDirection:'row'

    },
    title: {
        fontSize:30,
        fontWeight:'700',
        paddingLeft: 20,
        color:"#000"
    },
    price:{
        fontSize:30,
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
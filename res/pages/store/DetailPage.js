import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share,FlatList } from 'react-native';
import * as Linking from 'expo-linking';

import seedData from '../../../data.json'
import ReviewCard from '../../components/ReviewCard';

export default function DetailPage({navigation,route}) {
// 
    const seed = {
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
    }

    const [reviewState,setReviewState] = useState([])
    
   

    const popup = () => {
        Alert.alert("팝업!!")
    }
    let primary = seed.idx; 

  

    const share = () => {
        Share.share({
            message:`${seed.title} \n\n ${seed.desc} `,
        });
    }

    const link = (address) => {
        Linking.openURL({address})
    }
    return ( 


        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:seed.imgPath}}/>
           
            <View style={styles.textContainer}>
                <Text style={styles.title}>{seed.title}</Text>
                <Text style={styles.desc}>{seed.body}</Text>
                <Text style={styles.price}>{seed.price}</Text>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={()=>popup()}><Text style={styles.buttonText}>팁 찜하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>share()}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>link(address)}><Text style={styles.buttonText}>외부 링크</Text></TouchableOpacity>
                </View>
                
            </View>
      
        <View>
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
        backgroundColor:"#000"
    },
    image:{
        height:400,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:20,
        fontWeight:'700',
        color:"#eee"
    },
    desc:{
        marginTop:10,
        color:"#eee"
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
        color:'#fff',
        textAlign:'center'
    }
})
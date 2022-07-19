import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share,FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import {firebase_db} from "../../../firebaseConfig"
import Ionicons from '@expo/vector-icons/Ionicons'

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';



export default function DetailPage({navigation,route}) {
// 

const [seed, setSeed] = useState({
    "body": "어린 나무는 매우 아름답지만, 이미 20 ~ 30 년 정도 뒤쳐진 나무들과 비교해 보면 그 나무들은 예전의 동종만큼 높은 장식 적 가치를 가지고 있지 않다는 것이 사실입니다. 아마도 그것이 우리가 그들을 사 자마자 우리가 그들의 성장률을 가속화하기 위해 할 수있는 모든 것을하는 이유 일 것입니다. 아니면 전부가 아닐 수도 있습니다.우리는 물을주는 것에 대해 걱정하지만 필요한 다른 치료를 제공하는 것을 잊는 경우가 많습니다. 따라서 그들을 알고 싶다면 계속 읽으십시오. 나무를 빨리 자라게하는 방법. ",
    "idx": 0,
    "img": "https://www.jardineriaon.com/wp-content/uploads/2017/05/Acer_pensylvanicum.jpg.webp",
    "like": 0,
    "regDate": "22.07.19",
    "title": "나무는 이렇게 키우면 잘자라요~",
    "type": "boast",
    "writter": "user1"
})

   
useEffect(()=>{   
    //넘어온 데이터는 route.params에 들어 있습니다.
    // const { idx } = route.params;
    // firebase_db.ref('/seed/'+idx).once('value').then((snapshot) => {
    //     let seed = snapshot.val();
    //     setSeed(seed)
    // });
},[])

    const like = async () => {
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync(); // 분기처리
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }// 나중에 스토어랑 게시물 좋아요 데이터를 like / [article | seed] 형식으로 변경 
	       firebase_db.ref('/like2/'+userUniqueId+'/'+ seed.idx).set(seed,function(error){
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
            
           
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60, padding: 12, marginBottom: 4 }} >
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} >
                       
                        <Image source={{uri:seed.imgPath}} style={{ width: 42, height: 42, borderRadius: "50%", marginRight: 4 }} />
                    
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
                {/* 좋아요 */}
                <TouchableOpacity style={{width:28,height:28,margin:15}} onPress={()=>like()}>
                    <Ionicons name='heart-outline' size={28} style={{ marginRight: 2 }} />
              </TouchableOpacity>
                {/* 공유 */}
                 <TouchableOpacity style={{width:28,height:28}} onPress={()=>share()}>
                 <Ionicons name='ios-share-social' size={28} style={{ marginRight: 2 }} />
                 </TouchableOpacity>
            </View>


            <Image style={styles.image} source={{uri: route.params.img}}/>

            <View style={{ display: 'flex', padding: 12, paddingTop: 0}} >
                <View style={{ display: 'flex', marginBottom: 12}} >
                    <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 4, color: "#2f2f2f" }}>{seed.title}</Text>

             </View>
                

                <Text style={{ fontSize: 14, fontWeight: '500', color: '#3f3f3f', marginBottom: 8 }}>{route.params.body}</Text>
                
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 16 }} >
                    <View  style={{ display: 'flex', flexDirection: 'row', marginRight: 4, alignItems: 'center' }} >
                      <Ionicons name='ios-eye' size={11} style={{ marginRight: 2 }} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>132</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                      <Ionicons name='heart' size={12} style={{ marginRight: 2 , color:"red"}} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>10</Text>
                    </View>                
                </View>

               
            </View>
            
      

        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    image:{
        width: 376,
        height: 282,
        
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
    }
})
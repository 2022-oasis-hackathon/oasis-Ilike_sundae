import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import axios from "axios";

import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Banner from '../../components/Banner';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 


import FreeCard from '../../components/articles/FreeCard';
import AskCard from '../../components/articles/AskCard';
import BoastCard from '../../components/articles/BoastCard';

export default function MainPage({navigation,route}) {
  const [state,setState] = useState([])
  const [article,setArticle] = useState([
    {
      "idx":0,
      "writter":"user1",
      "title":"나무는 이렇게 키우면 잘자라요~",
      "body":"어린 나무는 매우 아름답지만, 이미 20 ~ 30 년 정도 뒤쳐진 나무들과 비교해 보면 그 나무들은 예전의 동종만큼 높은 장식 적 가치를 가지고 있지 않다는 것이 사실입니다. 아마도 그것이 우리가 그들을 사 자마자 우리가 그들의 성장률을 가속화하기 위해 할 수있는 모든 것을하는 이유 일 것입니다. 아니면 전부가 아닐 수도 있습니다.우리는 물을주는 것에 대해 걱정하지만 필요한 다른 치료를 제공하는 것을 잊는 경우가 많습니다. 따라서 그들을 알고 싶다면 계속 읽으십시오. 나무를 빨리 자라게하는 방법. ",
      "img":"https://www.jardineriaon.com/wp-content/uploads/2017/05/Acer_pensylvanicum.jpg.webp",
      "type":"boast", 
      "like":0,
      "regDate":"22.07.19"
   
  },
     {
      "idx":1,
      "writter":"user2",
      "title":"호박 기르는 방법",
      "body":"호박으로 달콤하거나 짭짤한 음식을 만들 수 있다. 호박씨는 볶아 먹을 수 있다. 호박은 예쁘고 화사한 가을 장식품이 되기도 한다. 호박을 기르는 것은 쉽고 저렴하다. 다양한 지역에서 잘 자라기 때문이다. 이 글을 통해 심을 호박 품종을 선택하는 방법, 호박이 잘 자랄 수 있는 환경 찾는 방법, 호박을 길러 수확하는 방법을 알아보자.",
      "img":"https://www.wikihow.com/images/thumb/c/cf/Grow-a-Pumpkin-Step-2-Version-2.jpg/v4-728px-Grow-a-Pumpkin-Step-2-Version-2.jpg.webp",
      "type":"boast",
      "like":0,
      "regDate":"22.07.19"
   
  },    {
      "idx":2,
      "writter":"user2",
      "title":"호박 기르는 방법",
      "body":"호박으로 달콤하거나 짭짤한 음식을 만들 수 있다. 호박씨는 볶아 먹을 수 있다. 호박은 예쁘고 화사한 가을 장식품이 되기도 한다. 호박을 기르는 것은 쉽고 저렴하다. 다양한 지역에서 잘 자라기 때문이다. 이 글을 통해 심을 호박 품종을 선택하는 방법, 호박이 잘 자랄 수 있는 환경 찾는 방법, 호박을 길러 수확하는 방법을 알아보자.",
      "img":"https://www.wikihow.com/images/thumb/c/cf/Grow-a-Pumpkin-Step-2-Version-2.jpg/v4-728px-Grow-a-Pumpkin-Step-2-Version-2.jpg.webp",
      "type":"boast",
      "like":0,
      "regDate":"22.07.19"
   
  }    
  ]);
  const [cateState,setCateState] = useState([])
  const [ready,setReady] = useState(true) // 데이터 받아 오기전까지 로딩 페이지.
  
  useEffect(()=>{
    setTimeout(()=>{
      firebase_db.ref('/seed').once('value').then((snapshot) => {
        let seed = snapshot.val();
        
        setState(seed)
        setCateState(seed)
        setReady(false)
      });
  },1000)
 
  },[])
 
  return ready ? <Loading/> :  (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      
        <View style={styles.banner}><Banner/></View>

    <View style={styles.topPicContainer}>
      <Text style={styles.topPicTitle}>실시간 인기글</Text>
        
        <View style={styles.topPicItem} horizontal indicatorStyle={"white"}>
          <View style={styles.topPicHeadder}>
            <TouchableOpacity style={styles.topPicButton} onPress={() => navigation.navigate('Boast')} >
              <Text style={styles.topPic}>자랑 팜</Text>
              <Text style={{ color: '#888', fontSize: 20, fontWeight: '500', lineHeight: 20 }}>
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal indicatorStyle={"white"}>
            {
              article.map((content,i)=>{
                return (<BoastCard content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
            
            
        </View>

            {/*TODO:  인기글 3개 나열  */}
        <View style={styles.topPicItem}>
          <View style={styles.topPicHeadder}>
            <TouchableOpacity style={styles.topPicButton} onPress={() => navigation.navigate('Ask')} >
              <Text style={styles.topPic}>질문 팜</Text>
              <Text style={{ color: '#888', fontSize: 20, fontWeight: '500', lineHeight: 20 }}>
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView indicatorStyle={"white"}>
            {
               article.map((content,i)=>{
                return (<AskCard content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
            
            
        </View>

        <View style={styles.topPicItem} horizontal indicatorStyle={"white"}>
          <View style={styles.topPicHeadder}>
              <TouchableOpacity style={styles.topPicButton} onPress={() => navigation.navigate('Free')} >
                <Text style={styles.topPic}>자유 팜</Text>
                <Text style={{ color: '#888', fontSize: 20, fontWeight: '500', lineHeight: 20 }}>
                  {'>'}
                </Text>
              </TouchableOpacity>
          </View>
          <ScrollView indicatorStyle={"white"}>
            {
               article.map((content,i)=>{
                return (<FreeCard content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
            
        </View>
      </View>
   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  banner:{
    width:'90%',
    height:200,
    marginTop:16,
    alignSelf:"center"
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop:50,
    marginLeft:20
  },
weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    width:'90%',
    height:200,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"
  },
 
  topPicContainer:{
    backgroundColor:'#f2f2f2',
    marginTop:10,
    shadowColor:'#f2f2f2',
    paddingBottom: 8
  },
 
  topPicTitle:{
    fontSize:16,
    paddingTop:14,
    paddingLeft:16,
    fontWeight: '600'
  },

  topPicItem: {
    marginTop:8,
    padding: 12,
    backgroundColor:'#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 8
  },
  topPicHeadder:{
    flex:1,
    flexDirection:'row',
    height: 36,
    borderBottomWidth:1,
    borderBottomColor:'#d2d2d2',
  },


  topPic:{
    fontSize: 14,
    fontWeight: '500',
    color: '#4d4d4d'
  },

  topPicButton:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
  }


});
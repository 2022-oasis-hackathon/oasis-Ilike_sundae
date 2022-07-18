import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as Location from "expo-location";
import axios from "axios";

import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Banner from '../../components/Banner';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 



export default function MainPage({navigation,route}) {
  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])
  const [ready,setReady] = useState(true) // 데이터 받아 오기전까지 로딩 페이지.

  //날씨 데이터 상태관리 상태 생성!
  // const [weather, setWeather] = useState({
  //   temp : 0,
  //   condition : ''
  // })


  useEffect(()=>{
    // navigation.setOptions({
    //   title:'YingFarm'
    // })  // seed에 담김 .once('value')값들을 . then((snapshot))여기에 담어.
    setTimeout(()=>{
      firebase_db.ref('/seed').once('value').then((snapshot) => {
        console.log("파이어베이스에서 데이터 가져왔습니다!!")
        let seed = snapshot.val();
        
        setState(seed)
        setCateState(seed)
        // getLocation()
        setReady(false)
      });
  },1000)
 
  },[])
// 위치 정보를 받아와 날씨정보 기능.
  // const getLocation = async () => {
  //   //수많은 로직중에 에러가 발생하면
  //   //해당 에러를 포착하여 로직을 멈추고,에러를 해결하기 위한 catch 영역 로직이 실행
  //   try {
  //     //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
  //     await Location.requestForegroundPermissionsAsync();
  //     const locationData= await Location.getCurrentPositionAsync();
  //     console.log(locationData)
  //     console.log(locationData['coords']['latitude'])
  //     console.log(locationData['coords']['longitude'])
  //     const latitude = locationData['coords']['latitude']
  //     const longitude = locationData['coords']['longitude']
  //     const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
  //     const result = await axios.get(
  //       `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  //     );

  //     console.log(result)
  //     const temp = result.data.main.temp; 
  //     const condition = result.data.weather[0].main
      
  //     console.log(temp)
  //     console.log(condition)

  //     setWeather({
  //       temp,condition
  //     })

  //   } catch (error) {
  //     Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
  //   }
  // }

  const category = (cate) => {
    if(cate == "전체보기"){
        setCateState(state)
    }else{
        setCateState(state.filter((d)=>{
            return d.category == cate
        }))
    }
}

  let todayWeather = 10 + 17;
  let todayCondition = "흐림"
 
  return ready ? <Loading/> :  (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      {/* <Text style={styles.weather}>오늘의 날씨: {weather.temp + '°C   ' + weather.condition} </Text> */}
       <TouchableOpacity style={styles.aboutButton} onPress={()=>{navigation.navigate('AboutPage')}}>
          <Text style={styles.aboutButtonText}>소개 페이지</Text>
        </TouchableOpacity>
        {/* 슬릭 기능 추가. */}
       
        <View style={styles.banner}><Banner/></View>

      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
      <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={()=>{navigation.navigate('LikePage')}}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
         {/* 하나의 카드 영역을 나타내는 View */}
         {
          cateState.map((content,i)=>{
            return (<Card content={content} key={i} navigation={navigation}/>)
          })
        }

        
        
      </View>
   
    </ScrollView>)
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  banner:{
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
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
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  middleButtonAll: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#20b2aa",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center",
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
  aboutButton: {
    backgroundColor:"pink",
    width:100,
    height:40,
    borderRadius:10,
    alignSelf:"flex-end",
    marginRight:20,
    marginTop:10
  },
  aboutButtonText: {
    color:"#fff",
    textAlign:"center",
    marginTop:10
  }


});
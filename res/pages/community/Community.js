import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import axios from "axios";

import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Banner from '../../components/Banner';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 



export default function MainPage({navigation,route}) {
  const [state,setState] = useState([])
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
          <Text style={styles.topPic}>자랑 팜</Text>
          <TouchableOpacity style={styles.topPicButton}><Text style={{ color: '#888', fontSize: 24, fontWeight: '500', alignSelf:'flex-end' }}>
                            {'>'}
                          </Text></TouchableOpacity>
          </View>
          
          <ScrollView horizontal indicatorStyle={"white"}>
            {
              cateState.map((content,i)=>{
                return (<Card content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
            
            
        </View>

            {/*TODO:  인기글 3개 나열  */}
        <View style={styles.topPicItem}>
        <View style={styles.topPicHeadder}>
          <Text style={styles.topPic}>질문 팜</Text>
          <TouchableOpacity style={styles.topPicButton}><Text style={{ color: '#888', fontSize: 24, fontWeight: '500', alignSelf:'flex-end' }}>
                            {'>'}
                          </Text></TouchableOpacity>
          </View>
          <ScrollView horizontal indicatorStyle={"white"}>
            {
              cateState.map((content,i)=>{
                return (<Card content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
            
            
        </View>

        <View style={styles.topPicItem} horizontal indicatorStyle={"white"}>
        <View style={styles.topPicHeadder}>
          <Text style={styles.topPic}>자유 팜</Text>
          <TouchableOpacity style={styles.topPicButton}><Text style={{ color: '#888', fontSize: 24, fontWeight: '500', alignSelf:'flex-end' }}>
                            {'>'}
                          </Text></TouchableOpacity>
          </View>
           <ScrollView horizontal indicatorStyle={"white"}>
            {
              cateState.map((content,i)=>{
                return (<Card content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
            
            
        </View>



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
    height:200,
    borderRadius:10,
    marginTop:20,
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
    backgroundColor:'#ddd',
    marginTop:10,
    shadowColor:'#ddd'
  },
 
  topPicTitle:{
    fontSize:20,
    paddingTop:20,
    paddingLeft:20
  },

  topPicItem: {
    marginTop:20,
    marginLeft:10,
    backgroundColor:'#fff',
    borderRadius:10
  },
  topPicHeadder:{
    flex:1,
    flexDirection:'row',
    height:40,
    borderBottomWidth:2,
    borderBottomColor:'#000',
    
  },


  topPic:{
    flex:1,
    alignSelf:'flex-start',
    fontWeight:'500',
    paddingTop:10,
    paddingLeft:40
  },

  topPicButton:{
    flex:1,
    fontWeight:'500',
    paddingLeft:40
  }


});
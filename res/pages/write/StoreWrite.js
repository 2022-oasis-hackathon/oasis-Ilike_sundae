
import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard} from "react-native";
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import data from '../../../data.json';

import {firebase_db} from "../../../firebaseConfig"

import * as ImagePicker from 'expo-image-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function CommunityWrite() {
  // 이미지 
  const [img,setImgUrl] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // 
  const [title, setTitle] =useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  
  const [local, setLocal] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  //
  const [seed,setSeed] = useState([]);


  const UploadImg = () => {
  //권한 등록.
      const uploadImage = async () => {
          if(!status?.granted){
              const permission = await requestPermission();
              if(!permission.granted){
                  return null;
              }
          }
  // 이미지 업로드 기능.
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }); // 갤러리 불러오기.
          if(result.cancelled){
              return null;// 이미지 업로드 취소한 경우.
          }
          setImgUrl(result.uri);
  
      };
      return (
       
          <SafeAreaView style={styles.imgBox}>
          <Pressable style={styles.uploadButton} onPress={uploadImage}>
          
              <Text style={styles.imgIcon}>이미지 업로드</Text>
          </Pressable>
          </SafeAreaView>
  
      );
  } 

  const addData = async () => {
const idx = 1; // autoincrement기능 필요
    let post = {
      "idx":idx,
      title,
      body,
      "writter":"user1",
     local,
      price,
     amount,
      img,
      "review":[
      ]
        
    }
    // 날짜 / autoincrement / 로그인 > 회원정보
    setSeed(post)
  
     firebase_db.ref('/seed1/'+idx).set(seed,function(error){ // test하기위해 다른 경로로 생성.
         console.log(error)
         Alert.alert("추가되었습니다.!")
     });
  }
    return(
      <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
  {UploadImg()}
    <View style={styles.row}>
      <Text style={styles.text}>제목 :</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
    </View>
    
     <View style={styles.row}>
      <Text style={styles.text}>가격 :</Text>
        <TextInput style={styles.purchase} onChangeText={setPrice} value={price} keyboardType="numeric"/><Text>   /   </Text>
        <TextInput style={styles.purchase} onChangeText={setAmount} value={amount} />
    </View> 

{/*  */}
<View style={styles.row}>
<Text style={styles.text}>거래방법 :</Text>
    <RadioButtonGroup 
      containerStyle={styles.radioGroup}
      selected={type}
      onSelected={(value) => setType(value)}
      radioBackground="green"
    > 
      <RadioButtonItem value="직거래" label="직거래" />
      <RadioButtonItem value="택배" label="택배" />

    </RadioButtonGroup>
  </View>

  <View style={styles.row}>
      <Text style={styles.text}>위치 :</Text>
      <TextInput style={styles.input} onChangeText={setLocal} value={local} />
    </View>

<Text style={styles.desc}> 내용 </Text>
    <View style={styles.contentBox}>
    <TextInput style={styles.input2} onChangeText={setBody} value={body} 
        placeholder="내용을 입력해주세요"/>
        
    </View>
    
     <TouchableOpacity style={styles.submit} onPress={()=>addData()}><Text style={styles.buttonText}>추가하기</Text></TouchableOpacity>
     </SafeAreaView>
          
                    
    </TouchableWithoutFeedback>
    </Layout>
    )
    
}


const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    marginLeft:10,
    marginRight:10
  },
  row:{
    flexDirection:'row',
   paddingTop:10,
   paddingBottom:5,
    alignItems:'center',
    borderBottomWidth: 2,
    borderColor:'#ccc',
    
  },
  imgBox:{
    width: 110,
    height: 110,
    borderWidth:1.5,
    borderRadius:5,
    borderColor:'#aaa',
    marginTop:10
  },
  uploadButton:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    color:'fff'

  },
  imgIcon:{
    textAlign:'center',
  },

  input: {
    width:'75%',
  },
  purchase:{
    width:100,
    padding:3,
    borderWidth:1,
    borderColor:'#aaa',
    borderRadius:10,
    backgroundColor:'#aaa'
  },

  input2: {
    width:'75%',
    height: 40,
    margin: 12,
    padding: 10,
  },
  desc:{
    fontSize:18,
    padding:5,
    borderBottomWidth:2,
    borderColor:'#aaa'

  },
  cardImage:{
    width:100,
    height:100
  },
 
text:{
  fontSize:18,
  padding:5
},
contentBox:{
  width:340,
  height: 260,
  borderTopWidth:0.5,
  borderColor:'#aaa'
},
radioGroup:{
  display:'flex',
  width:'80%',
  alignSelf:'flex-end',
  justifyContent:'space-around',
  flexDirection:'row',
  
},
submit:{
  display:'flex',
  justifyContent:'center',
  alignSelf:'center',
  width:80,
  height:50,
  borderWidth:2,
  borderColor:'#ddd'
},
buttonText:{
  textAlign:'center'
}


});



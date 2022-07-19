
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
  //
  const [article,setArticle] = useState([]);

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
    const idx = 2 // autoimcrement기능 필요.
    let post = {
       "idx":idx,
       "writter":"user5",
       title,
      body,
       img,
      type, 
       "like":0,
       "regDate":"22.07.19"
    }
    // 날짜 / autoincrement / 로그인 > 회원정보
    setArticle(post)
  
     firebase_db.ref('/article_test/'+idx).set(article,function(error){
         console.log(error)
         Alert.alert("추가되었습니다.!")
     });
  }
    return(
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
  {UploadImg()}
    <View style={styles.textBox}>
      <Text style={styles.text}>제목 :</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
    </View>
    
{/*  */}
<View style={{ marginTop: 10 }}>
    <RadioButtonGroup 
      containerStyle={styles.radioGroup}
      selected={type}
      onSelected={(value) => setType(value)}
      radioBackground="green"
    > 
      <RadioButtonItem value="ask" label="ask" />
      <RadioButtonItem value="free" label="free" />
      <RadioButtonItem value="boast" label="boast"/>

    </RadioButtonGroup>
  </View>
<Text style={styles.desc}> 내용 </Text>
    <View style={styles.contentBox}>
    <TextInput style={styles.input2} onChangeText={setBody} value={body} />
        
    </View>
     <TouchableOpacity style={styles.submit} onPress={()=>addData()}><Text style={styles.buttonText}>추가하기</Text></TouchableOpacity>
     </SafeAreaView>
   

  
              
                    
    </TouchableWithoutFeedback>
    )
    
}


const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
  
    marginLeft:10,
    marginRight:10
    
  },
  imgBox:{
    width: 110,
    height: 110,
    borderWidth:1.5,
    borderRadius:5,
    borderColor:'#aaa'
  },

  uploadButton:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'

  },
  imgIcon:{
    textAlign:'center',
  },


  input: {
    width:'75%',
    height: 40,
    margin: 12,
    borderBottomWidth: 2,
    borderColor:'#aaa',
    padding: 10,
  },
  input2: {
    width:'75%',
    height: 40,
    margin: 12,
    padding: 10,
  },
  desc:{
    fontSize:24,
    paddingTop:10,
    borderBottomWidth:2,
    borderColor:'#aaa'


  },
  cardImage:{
    width:100,
    height:100
  },
  textBox:{
    flexDirection:'row',
   paddingTop:15,
    alignItems:'center'
    
  },
text:{
  fontSize:20,
  padding:5
},
contentBox:{
  width:340,
  height: 300,
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



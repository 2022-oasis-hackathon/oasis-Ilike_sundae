
import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard, Button} from "react-native";
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import data from '../../../data.json';
import Ionicons from '@expo/vector-icons/Ionicons'


import {firebase_db} from "../../../firebaseConfig"

import * as ImagePicker from 'expo-image-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function CommunityWrite({ navigation, route }) {
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
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    // 날짜 / autoincrement / 로그인 > 회원정보
    setArticle(post)
  
     firebase_db.ref('/article_test/'+idx).set(article,function(error){
         console.log(error)
         Alert.alert("추가되었습니다.!")
     });
     
  }
  

  useEffect(() => {
    navigation.setOptions({
      title: '커뮤니티 글쓰기'
    })

  }, []);

    return(
      <>    
    <Layout>
        <View style={{ display: 'flex', flexDirection: 'row' }} >
          <TouchableOpacity  onPress={pickImage} style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: 120, height: 120, borderWidth: 1, borderRadius: 4, marginRight: 8 }} >
            <Ionicons name="camera-outline" size={48} color="#4d4d4d" />
            <Text style={{ fontSize:14, fontWeight: '500', color: '#4d4d4d' }} >사진업로드</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 4 }} />}
        </View>


      <View style={styles.row}>
        <Text style={styles.text}>제목 :</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>
    
      <View style={{ height: '100%' }} >
        <TextInput style={styles.input2} onChangeText={setBody} value={body} 
            placeholder="내용을 입력해주세요"/>
      </View>
    
  </Layout>
     <TouchableOpacity style={{ height: 40, width: 100 ,position: 'absolute', bottom: 0,right: 40, backgroundColor: '#FF7B00', display: 'flex', alignItems:"center", justifyContent: 'center', borderRadius: 8 }} onPress={()=>addData()}>
      <Text style={{ color: 'white', fontWeight: '600' }} >추가하기</Text>
      </TouchableOpacity>
  </>
)};


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
    borderBottomWidth: 1,
    borderColor:'#d4d4d4',
    marginTop: 4
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
    borderRadius:10,
    backgroundColor:'#d2d2d2'
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
  fontSize:14,
  fontWeight: '500',
  marginBottom: 4
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




// like / article / id / 
// like / seed 
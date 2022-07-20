
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
  };

  useEffect(() => {
    navigation.setOptions({
      title: '판매 글쓰기'
    })
  }, [])

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
    
      <View style={styles.row}>
        <Text style={{ fontSize: 14, fontWeight: '500', marginRight: 8 }}>가격 :</Text>
        
        <View style={{ height: 24 ,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: 100, backgroundColor: '#d2d2d2', borderRadius: 12, paddingRight: 8 }} >
          <TextInput style={{ width: 50 }}  onChangeText={setPrice} value={price} keyboardType="numeric"/>
          <Text style={{ fontSize: 12, fontWeight: '500', color: "#2d2d2d" }} >원</Text>
        </View>
        
        <Text>   /   </Text>

        <View style={{ height: 24 ,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: 80, backgroundColor: '#d2d2d2', borderRadius: 12, paddingRight: 8 }} >
          <TextInput style={{ width: 50 }}  onChangeText={setPrice} value={price} keyboardType="numeric"/>
          <Text style={{ fontSize: 12, fontWeight: '500', color: "#2d2d2d" }} >kg</Text>
        </View>
      </View> 

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


      <View style={{ height: '100%' }} >
        <TextInput style={styles.input2} onChangeText={setBody} value={body} 
            placeholder="내용을 입력해주세요"/>
      </View>
    
  </Layout>
     <TouchableOpacity style={{ height: 40, width: 100 ,position: 'absolute', bottom: 0,right: 40, backgroundColor: '#FF7B00', display: 'flex', alignItems:"center", justifyContent: 'center', borderRadius: 8 }} onPress={()=>addData()}>
      <Text style={{ color: 'white', fontWeight: '600' }} >추가하기</Text>
      </TouchableOpacity>
  </>
)}


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



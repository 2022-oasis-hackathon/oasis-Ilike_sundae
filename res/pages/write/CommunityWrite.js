
import {Pressable,Text,StyleSheet, Image} from "react-native";
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import data from '../../../data.json';

import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";



const UploadImg = () => {
  const [imgUrl,setImgUrl] = useState();
	const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
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
        <SafeAreaView>
        <Pressable onPress={uploadImage}>
            <Text>이미지 업로드</Text>
        </Pressable>

        </SafeAreaView>

    );
}


const CommunityWrite = () => {
return(


  
UploadImg()
)
}










const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container:{
    alignSelf:'center',
    width: '100%',
    borderWidth:1,
    borderRadius: 4,
    backgroundColor:'#ddd'
    
  },
  cardImage:{
    width:100,
    height:100
  }
});


export default CommunityWrite
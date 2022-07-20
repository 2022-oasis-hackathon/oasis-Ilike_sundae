import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Ionicons from '@expo/vector-icons/Ionicons'

const Mypage = ({ navigation, route }) => {
const [profile,setProfile] = useState(
  {
    "name":"정민수",
    "local":"전주시"
  }

)
  useEffect(() => {
  }, [])
  
  let setName = ""
  let setLocal = ""
  return (
    
    <Layout>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 20 }} >
        <View style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: '50%', marginRight: 12 }} ></View>
      </View>

     
      <View style={{ display:'flex', flexDirection:'row'}}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#505150', marginBottom: 4,paddingRight:20 }} >이름  :</Text>
          <TextInput onChangeText={text => setName(text)} ></TextInput>
        </View>
      <View style={{ display:'flex', flexDirection:'row',marginTop:10,marginBottom:20}}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#505150', marginBottom: 4,paddingRight:20 }} >지역  :</Text>
          <TextInput style={{width:200,height:'100%'}} onChangeText={text => setLocal(text)} ></TextInput>
        </View>

        <TouchableOpacity  onPress={() => navigation.navigate('MypageNavigator', { screen: 'Mypage',params:{profile}})} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#8f8f8f', height: 44, borderRadius: 4, marginBottom: 16 }} >
        <Text style={{ color: '#8f8f8f', fontWeight: '500' }} >프로필 수정</Text>
      </TouchableOpacity>

    </Layout>
  )
}

export default Mypage

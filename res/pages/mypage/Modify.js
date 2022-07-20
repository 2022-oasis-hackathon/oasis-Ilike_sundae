import { View, Text, Image, TextInput } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../../components/Layout';

const Modify = ({navigation}) => {



  const [state,setState] = useState({
    "name":"정민수",
    "local":"전주시 ....",
    "img":"data:image/jpeg;base64,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"

  });

  const name = "";
  const local = "";
  const img = "";

  useEffect(() => {
    console.log("Q")
  }, [])
  
  return (
    <Layout>
      <View style={{ display: 'flex', flexDirection: 'rcolumn', alignItems: 'left', marginTop: 12, marginBottom: 20 }} >
        <View style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: '50%', marginRight: 12 }} >
          <Image style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: '50%', marginRight: 12 }} source={{uri:state.img}}/>
        </View>
        
        <View style={{padding:20 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#FF7B00', marginBottom: 4 }} >닉네임  : </Text>
          
        <TextInput onChangeText={name} value={name} />
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#4f4f4f',paddingTop:10 }} >{state.local}</Text>
        <TextInput onChangeText={local} value={local} />
        </View>



      </View>

    

    </Layout>
  )
}

export default Modify
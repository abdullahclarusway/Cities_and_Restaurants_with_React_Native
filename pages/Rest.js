import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Rest = (props) => {

    const datas = props.route.params.item
    return (
       <ScrollView style={{flex:1, backgroundColor:"#E1E9F6"}}>
         <View style={{flex:1,  }}>
        <View style={{flex:1, }}>
      <Image source={{uri: datas.image2}}  style={{ height:Dimensions.get("window").height/4, margin:10, borderRadius:10, marginTop:30}}/>
          <Text style={{fontSize:20, fontWeight:"bold", alignSelf:"center"}}>{datas.name}</Text>
          <TouchableOpacity style={{flex:1, flexDirection:"row", padding:5, margin:10, borderWidth:0.4, borderRadius:5, backgroundColor:"#DBCA91"}}>
          <Image style= {{width:20, height:20}} source={{uri:"https://img.icons8.com/ios-filled/344/address.png"}}/>
            <Text style={{fontSize:15, fontWeight:"bold", marginLeft:10}} >{datas.address}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,flexDirection:"row" ,  padding:5, margin:10,borderWidth:0.4, borderRadius:5, backgroundColor:"#DBCA91"}}>
          <Image  style= {{width:20, height:20}} source={{uri:"https://img.icons8.com/ios-filled/344/phone.png"}}/>
          <Text style={{fontSize:15, fontWeight:"bold", marginLeft:10 }}>{datas.tel}</Text>
          </TouchableOpacity>
          </View>
         
        <View  style={{flex:1, marginTop:50, }} >
        <TouchableOpacity style={{flex:1, alignSelf:"center", width:Dimensions.get("window").width/3,  borderWidth:0.4, borderRadius:5, backgroundColor:"#D0AA58"}} >
          <Text style={{flex:1, alignSelf:"center", fontSize:15, fontWeight:"bold"}}  >Reserve Now</Text>
        </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
  );
};

export { Rest };
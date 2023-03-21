import React, {Component,View,Button,StyleSheet,Text, Image} from "react-native";

import { AntDesign } from '@expo/vector-icons';


const Content=({navigation})=>{


    
  return (

        <View className="content-list" style={styles.Content}>
          <Text style={{fontWeight:'bold',fontSize:22,backgroundColor:'#3366ff',marginBottom:2, justifyContent:'center'}}>                                   Data Pribadi</Text>
          <View style={styles.contentName2}>
            <Image style={{width:200,height:200, marginBottom:40}} source={require("./assets/icon/photo.jpg")}></Image>
            <Text style={{fontSize:18}}>Muhammad Hadi Arsa</Text>
            <Text style={{fontSize:18}}>120140150</Text>
            <Text style={{fontSize:18}}>Teknik Informatika</Text>
            <Text style={{fontSize:18}}>2020</Text>
            <Text style={{fontSize:18}}>085379544XXX</Text>
            <Text style={{fontSize:18}}>Jl. Endro Suratmin GG. Waru Sukarame</Text>
          </View>
        </View>
  
  )
}

const styles = StyleSheet.create({
    Content:{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#8fe6f7',
      height:1000,
    },

    contentName:{
      float:'left',
      position:'absolute',
      marginTop:25
   
    },
    contentName2:{
      width:'100%',
      display:'flex',
      position:"relative",
      textAlign:"center",
      marginTop:25,
      paddingTop:30, 
      alignItems:"center",
    },
    contentTime:{
      float:'right',
      position:'relative',
      paddingLeft:280
    },
  


  

    

  });

export default Content;

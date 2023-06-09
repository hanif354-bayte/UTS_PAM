import React, {Component,View,Button,StyleSheet,Text, Image} from "react-native";

import { AntDesign } from '@expo/vector-icons';


const Content=({navigation})=>{


    
  return (

        <View className="content-list" style={styles.Content}>
          <Text style={{fontWeight:'bold',fontSize:22,backgroundColor:'#f5ff33',marginBottom:2, justifyContent:'center'}}>                          Data Pribadi</Text>
          <View style={styles.contentName2}>
            <Image style={{width:200,height:200, marginBottom:40}} source={require("./assets/icon/photo.jpg")}></Image>
            <Text style={{fontSize:18}}>Hanif Putra Agusta</Text>
            <Text style={{fontSize:18}}>120140120</Text>
            <Text style={{fontSize:18}}>Teknik Informatika</Text>
            <Text style={{fontSize:18}}>2020</Text>
            <Text style={{fontSize:18}}>082280785486</Text>
            <Text style={{fontSize:18}}>Jl. Pulau Bawean GG. Titilas no.62</Text>
          </View>
        </View>
  
  )
}

const styles = StyleSheet.create({
    Content:{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#72b823',
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

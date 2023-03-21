import React, {Component,View,Button,StyleSheet,Text} from "react-native";

import { AntDesign } from '@expo/vector-icons';


const Content=({navigation})=>{
      const time=['18:40','19:45','20:00','21:00','19:30','20:00','21:00'];  
      const prays=["Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"];
    
      var contentName=[]
      var contentTime=[]
    
    
      
    for (let i = 0; i < prays.length; i++) {
      contentName.push(
        <View key={i} className="list-content" style={{display:'flex',flexDirection:'row'}}>
          <Text style={{padding:20,margin:2,fontSize:25}}>{prays[i]}</Text>
        </View>)
      contentTime.push(
        <View key={i} className="list-content" style={{display:'flex',flexDirection:'row',float:'right'}}>
          <Text style={{padding:20,margin:2,fontSize:25}}>{time[i]}</Text>
        </View>
      )
    }

    
  return (

        <View className="content-list" style={styles.Content}>
          <Text style={{fontWeight:'bold',fontSize:22,backgroundColor:'#3366ff',marginBottom:2}}>     Hari                                           Waktu</Text>
          <View style={styles.contentName}>
            {contentName}
          </View>
          <View style={styles.contentTime}>
            {contentTime}
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

    contentTime:{
      float:'right',
      position:'relative',
      paddingLeft:280
    },
  


  

    

  });

export default Content;

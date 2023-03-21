import React, {Component,View,Button,StyleSheet,Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Content2=({navigation})=>{
      const time=['18:40-19:30','19:45-20:30','20:00-21:00','21:00-22:00','19:30-20-30','20:00-21:00','20:00-21:15'];  
      const prays=["Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"];
      const materi =[
        'Senin : Belajar matematika, Matematika adalah ilmu tentang logika mengenai bentuk, susunan, besaran dan konsep-konsep yang berhubungan satu dengan yang lainnya dengan jumlah yang banyak dan terbagi kedalam tiga bidang, yaitu aljabar, analisis dan geometri.',
        'Selasa : Belajar fisika, Fisika adalah sains atau ilmu alam yang mempelajari materi beserta gerak dan perilakunya dalam lingkup ruang dan waktu, bersamaan dengan konsep yang berkaitan seperti energi dan gaya. Sebagai salah satu ilmu sains paling dasar, tujuan utama fisika adalah memahami bagaimana alam semesta berkerja.',
        'Rabu : Belajar kimia, Kimia (serapan dari bahasa Arab: كيمياء) adalah cabang dari ilmu fisik yang mempelajari tentang susunan, struktur, sifat, dan perubahan materi.[1][2] Ilmu kimia meliputi topik-topik seperti sifat-sifat atom, cara atom membentuk ikatan kimia untuk menghasilkan senyawa kimia, interaksi zat-zat melalui gaya antarmolekul yang menghasilkan sifat-sifat umum dari materi, dan interaksi antar zat melalui reaksi kimia untuk membentuk zat-zat yang berbeda..',
        'Kamis: Belajar bahasa inggris, Bahasa Inggris adalah bahasa Jermanik yang pertama kali dituturkan di Inggris pada Abad Pertengahan Awal dan saat ini merupakan bahasa yang paling umum digunakan di seluruh dunia. ',
        'Jumat : Belajar ngoding, merupakan kegiatan yang dimana kamu memberitahukan komputer apa yang harus dia kerjakan untuk kamu. Sebuah kode yang ada pada skrip bisa diibaratkan layaknya bahasa sehari-hari. Setiap kode yang kamu tulis akan membantu komputer untuk mengetahui dan memahami apa yang ingin kamu lakukan pada komputer.',
        'Sabtu : Belajar biologi, Biologi atau ilmu hayat adalah kajian tentang kehidupan, dan organisme hidup, termasuk struktur, fungsi, pertumbuhan, evolusi, persebaran, dan taksonominya. Ilmu biologi modern membahas pengetahuan yang sangat luas, eklektik, serta terdiri dari berbagai macam cabang dan subdisiplin. ',
        'Minggu : Mengaji, Mengaji merujuk pada aktivitas membaca Al Quran atau membahas kitab-kitab oleh penganut agama Islam. '
      ]
    
      var contentName=[]
      var contentTime=[]
      var contentDetail=[]
    
    
      
    for (let i = 0; i < prays.length; i++) {
      contentName.push(
        <View key={i} className="list-content" style={{display:'flex',flexDirection:'row'}}>
          <Text style={{padding:20,margin:2,fontSize:25}}>{prays[i]}</Text>
        </View>)
    //   contentDetail.push(

    //     <View key={i} className="list-content" style={{display:'flex',flexDirection:'row',float:'right'}}>
    //       <Button title="Detail" color={'green'} onClick={alert(materi[i])}/>
    //     </View>
    //   )
    }

    
  return (

        <View className="content-list" style={styles.Content}>
          <Text style={{fontWeight:'bold',fontSize:22,backgroundColor:'#3366ff',marginBottom:2}}>   Materi                                       materi</Text>
          <View style={styles.contentName}>
            {contentName}
          </View>
          <View style={styles.contentTime}>
            <View style={{padding:25}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[0])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[1])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[2])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[3])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[4])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[5])}} style={{padding:20}}/>
            </View>
            <View style={{padding:20}}>
                <Button title="Detail" color={'blue'} onPress={()=>{alert(materi[6])}} style={{padding:20}}/>
            </View>
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
      paddingLeft:250
    },
  


  

    

  });

export default Content2;

import React, {useState} from "react";
import { View, Text,TouchableOpacity, StyleSheet} from "react-native";
import { useSelector } from "react-redux";

const Background = ({children}) =>{


  return(
    <View style={{width:'100%', height:'100%', backgroundColor:'#181818', position:'absolute', alignItems:'center', justifyContent:'space-between'}}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  step:{
    color:'white',
    fontSize:20,
    height:50,
    width:50,
    backgroundColor:'transparent',
    borderRadius:25,
    borderWidth:2,
    borderColor:"#b3b3b3",
    textAlignVertical:'center',
    textAlign:'center',
    fontWeight:'700'
  },
  formContainer:{
    height:500,
    width:'90%',
    backgroundColor:'#5a5a5a',
    borderRadius:15
  },
  button:{
    height:50,
    width:150,
    backgroundColor:"grey",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  }
})

export default Background;
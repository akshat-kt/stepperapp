import React from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import Background from "./Background";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { setSelectData } from "../actions/formActions";

const Select=({navigation})=>{

    let page=1;
    const dispatch = useDispatch();
    const [plan,setPlan]=useState("");
    
    const onNext=()=>{
        dispatch(setSelectData({plan}));
        navigation.navigate('Addons');
    }

    console.log(plan)

    return(
        <Background>

<View style={{backgroundColor:'#181818',flexDirection:'row', justifyContent:'space-around',alignItems:'center', paddingTop:25,paddingBottom:25, width:"100%", height:'20%'}}>
        <View><Text style={[styles.step, {backgroundColor:page==0?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==0?'black':'white', fontSize:25}]}>1</Text></View>
        <View><Text style={[styles.step, {backgroundColor:page==1?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==1?'black':'white', fontSize:25}]}>2</Text></View>
        <View><Text style={[styles.step, {backgroundColor:page==2?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==2?'black':'white', fontSize:25}]}>3</Text></View>
        <View><Text style={[styles.step, {backgroundColor:page==3?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==3?'black':'white', fontSize:25}]}>4</Text></View>
    </View>

        <View style={{height:'70%', width:'90%', backgroundColor:'transparent', borderRadius:5, flexDirection:"column", justifyContent:'flex-start'}}>
            <Text style={{fontSize:35, color:'white', fontWeight:'500', paddingTop:25, paddingLeft:10}}>Select your plan.</Text>
            <Text style={{fontSize:18, color:'#b3b3b3', paddingLeft:10}}>You have option of monthly or yearly billing.</Text>

            <TouchableOpacity value={plan} onPress={()=>{setPlan('Arcade')}} style={{backgroundColor:'#404040', width:'95%', height:120, marginTop:30, borderRadius:10}}>
                <Text style={{fontSize:28, marginTop:10, marginLeft:10, fontWeight:'600', color:'#fff'}}>Arcade</Text>
                <Text style={{paddingLeft:10, fontSize:18, color:'#b3b3b3'}}>$9/mo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setPlan('Advanced')}} style={{backgroundColor:'#404040', width:'95%', height:120, marginTop:30, borderRadius:10}}>
                <Text style={{fontSize:28, marginTop:10, marginLeft:10, fontWeight:'600', color:'#fff'}}>Advanced</Text>
                <Text style={{paddingLeft:10, fontSize:18, color:'#b3b3b3'}}>$9/mo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setPlan('Pro')}} style={{backgroundColor:'#404040', width:'95%', height:120, marginTop:30, borderRadius:10}}>
                <Text style={{fontSize:28, marginTop:10, marginLeft:10, fontWeight:'600', color:'#fff'}}>Pro</Text>
                <Text style={{paddingLeft:10, fontSize:18, color:'#b3b3b3'}}>$9/mo</Text>
            </TouchableOpacity>


        </View>

        <View style={{height:100, width:'100%', flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor:'#181818'}}>
                <TouchableOpacity disabled={page==0} style={[styles.button, {backgroundColor:page==0?'transparent':'grey'}]} onPress={()=>{navigation.navigate('Info')}}>
                    <Text style={{fontSize:20, color:page==0?'grey':'white', fontWeight:'600'}}>Prev</Text>
                </TouchableOpacity>
        
                <TouchableOpacity disabled={(page==3)&&(plan=='')} style={[styles.button, {backgroundColor:page==3?'transparent':'grey'}]} onPress={onNext}>
                    <Text style={{fontSize:20, color:page==3?'grey':'white', fontWeight:'600'}}>Next</Text>
                </TouchableOpacity>
            </View>

      </Background>
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

export default Select; 
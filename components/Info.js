import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setInfoData} from "../actions/formActions";
import Background from "./Background";


const Info=({navigation})=>{

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [page, setPage] = useState(0);

    const onNext=()=>{
        dispatch(setInfoData({name, email, phone,page}));
        navigation.navigate('Select');
    }
    
    return(
        <Background>            
            <View style={{backgroundColor:'#181818',flexDirection:'row', justifyContent:'space-around',alignItems:'center', paddingTop:25,paddingBottom:25, width:"100%", height:'20%'}}>
                <View><Text style={[styles.step, {backgroundColor:page==0?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==0?'black':'white', fontSize:25}]}>1</Text></View>
                <View><Text style={[styles.step, {backgroundColor:page==1?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==1?'black':'white', fontSize:25}]}>2</Text></View>
                <View><Text style={[styles.step, {backgroundColor:page==2?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==2?'black':'white', fontSize:25}]}>3</Text></View>
                <View><Text style={[styles.step, {backgroundColor:page==3?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==3?'black':'white', fontSize:25}]}>4</Text></View>
            </View>
            
            <View style={{height:'70%', width:'90%', backgroundColor:'transparent', borderRadius:5, flexDirection:"column", justifyContent:'flex-start'}}>
                <Text style={{fontSize:35, color:'white', fontWeight:'500', paddingTop:25, paddingLeft:10}}>Personal Info</Text>
                <Text style={{fontSize:18, color:'#b3b3b3', paddingLeft:10}}>Please Provide your name, email, address, and phone number.</Text>
              
                <Text style={{color:'#b3b3b3', paddingLeft:'5%', paddingTop:40}}>Name</Text>
                <TextInput value={name} placeholder="eg. Stephen King" onChangeText={setName} style={{paddingLeft:10,backgroundColor:'#b3b3b3',borderWidth:2, borderColor:'#404040', borderRadius:10, width:'95%', marginLeft:'2.5%'}}/>
              
                <Text style={{color:'#b3b3b3', paddingLeft:'5%', paddingTop:40}}>E-mail</Text>
                <TextInput value={email} inputMode="email" placeholder="eg. stephen@horror.com" onChangeText={setEmail} style={{paddingLeft:10,backgroundColor:'#b3b3b3',borderWidth:2, borderColor:'#404040', borderRadius:10, width:'95%', marginLeft:'2.5%'}}/>
              
                <Text style={{color:'#b3b3b3', paddingLeft:'5%', paddingTop:40}}>Phone Number</Text>
                <TextInput value={phone} inputMode="numeric" placeholder="eg. +91 8787876666" onChangeText={setPhone} style={{paddingLeft:10,backgroundColor:'#b3b3b3',borderWidth:2, borderColor:'#404040', borderRadius:10, width:'95%', marginLeft:'2.5%'}}/>
            </View>

            <View style={{height:100, width:'90%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity disabled={page==0} style={[styles.button, {backgroundColor:page==0?'transparent':'grey'}]} onPress={()=>{navigation.navigate('Info')}}>
                    <Text style={{fontSize:20, color:page==0?'grey':'white', fontWeight:'600'}}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={page==3} style={[styles.button, {backgroundColor:page==3?'transparent':'grey'}]} onPress={onNext}>
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


export default Info;
import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Background from "./Background";
import { useDispatch } from "react-redux";
import CheckBox from "@react-native-community/checkbox";
import { setAddonsData } from "../actions/formActions";

const Addons=({navigation})=>{
    let page=2;
    const dispatch = useDispatch();
    const [a1, setToggleCheckBox1] = useState(false);
    const [a2, setToggleCheckBox2] = useState(false);
    const [a3, setToggleCheckBox3] = useState(false);
    
    let addonss = [a1,a2,a3];

    const onNext=()=>{
        dispatch(setAddonsData({a1,a2,a3}));
        navigation.navigate('Finish');
    }

    

    console.log(addonss);

    return(
        <Background>

<View style={{backgroundColor:'#181818',flexDirection:'row', justifyContent:'space-around',alignItems:'center', paddingTop:25,paddingBottom:25, width:"100%", height:'20%'}}>
        <View><Text style={[styles.step, {backgroundColor:page==0?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==0?'black':'white', fontSize:25}]}>1</Text></View>
        <View><Text style={[styles.step, {backgroundColor:page==1?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==1?'black':'white', fontSize:25}]}>2</Text></View>
        <View><Text style={[styles.step, {backgroundColor:page==2?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==2?'black':'white', fontSize:25}]}>3</Text></View>
        <View><Text style={[styles.step, {backgroundColor:page==3?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==3?'black':'white', fontSize:25}]}>4</Text></View>
    </View>

            <View style={{height:'70%', width:'90%', backgroundColor:'transparent', borderRadius:5, flexDirection:"column", justifyContent:'flex-start'}}>
                <Text style={{fontSize:35, color:'white', fontWeight:'500', paddingTop:25, paddingLeft:10}}>Pick add-ons</Text>
                <Text style={{fontSize:18, color:'#b3b3b3', paddingLeft:10, marginBottom:20}}>Add-ons help enhance your gaming experience.</Text>

                <TouchableOpacity onPress={()=>{a1?setToggleCheckBox1(false):setToggleCheckBox1(true)}} style={{height:100, width:'100%', backgroundColor:'#404040', marginBottom:20, flexDirection:"row", alignItems:'center',borderRadius:10, justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>{a1?setToggleCheckBox1(false):setToggleCheckBox1(true)}} style={{height:20,width:20, backgroundColor:a1?'#01f9c6':'#404040', borderRadius:3 , marginLeft:10, borderWidth:1, borderColor:a1?'#01f9c6':'#b3b3b3'}}></TouchableOpacity>
                    <View style={{flexDirection:'column', width:'70%'}}>
                        <Text style={{fontSize:22, fontWeight:'600', color:'#fff', marginLeft:10}}>Online Services</Text>  
                        <Text style={{fontSize:16, color:'#b3b3b3', marginLeft:10}}>Access to multiplayer games</Text>               
                    </View>
                    <Text style={{color:'#03DAC6', marginRight:10}}>+$/3mo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{a2?setToggleCheckBox2(false):setToggleCheckBox2(true)}} style={{height:100, width:'100%', backgroundColor:'#404040', marginBottom:20, flexDirection:"row", alignItems:'center',borderRadius:10, justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>{a2?setToggleCheckBox1(false):setToggleCheckBox1(true)}} style={{height:20,width:20, backgroundColor:a2?'#01f9c6':'#404040', borderRadius:3 , marginLeft:10, borderWidth:1, borderColor:a2?'#01f9c6':'#b3b3b3'}}></TouchableOpacity>
                    <View style={{flexDirection:'column', width:'70%'}}>
                        <Text style={{fontSize:22, fontWeight:'600', color:'#fff', marginLeft:10}}>Larger Storage</Text>  
                        <Text style={{fontSize:16, color:'#b3b3b3', marginLeft:10}}>Extra 1TB of cloud save</Text>           
                    </View>
                    <Text style={{color:'#03DAC6', marginRight:10}}>+$5/mo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{a3?setToggleCheckBox3(false):setToggleCheckBox3(true)}} style={{height:100, width:'100%', backgroundColor:'#404040', marginBottom:20,flexDirection:"row", alignItems:'center',borderRadius:10, justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>{a3?setToggleCheckBox1(false):setToggleCheckBox1(true)}} style={{height:20,width:20, backgroundColor:a3?'#01f9c6':'#404040', borderRadius:3 , marginLeft:10, borderWidth:1, borderColor:a3?'#01f9c6':'#b3b3b3'}}></TouchableOpacity>
                    <View style={{flexDirection:'column', width:'70%'}}>
                        <Text style={{fontSize:22, fontWeight:'600', color:'#fff', marginLeft:10}}>Customizable Profile</Text>  
                        <Text style={{fontSize:16, color:'#b3b3b3', marginLeft:10}}>Custom theme on your profile</Text>           
                    </View>
                    <Text style={{color:'#03DAC6', marginRight:10}}>+$7/mo</Text>
                </TouchableOpacity>

            </View>

            <View style={{height:100, width:'90%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity disabled={page==0} style={[styles.button, {backgroundColor:page==0?'transparent':'grey'}]} onPress={()=>{navigation.navigate('Select')}}>
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

export default Addons; 
import React from "react";
import { Text, View,TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import Background from "./Background";


const Finish=({navigation})=>{
    let page=3;
    const InfoData = useSelector(
        (state) => state.Info
    );
    const PlanData = useSelector(
        (state)=>state.Select
    );
    const AddonsData=useSelector(
        (state)=>state.Addons
    );

    let a1=AddonsData.a1;
    let a2=AddonsData.a2;
    let a3=AddonsData.a3;
    let iprice=0;

    if (PlanData.plan=='Arcade'){iprice=9}else if(PlanData.plan=='Advanced'){iprice=14}else if(PlanData.plan=='Pro'){iprice=17};
    let total = iprice;
    if(a1){total+=3};
    if(a2){total+=5};
    if(a3){total+=7};


    const displayOS=()=>{
        if(a1){
            return(
                <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                    <Text style={{fontSize:24,margin:10, color:'#b3b3b3'}}>Online Services</Text>
                    <Text style={{fontSize:18, margin:14, color:'#cf6679'}}>+$3/mo</Text>
                </View>
            )
        }
    }

    const displayLS=()=>{
        if(a2){
            return(
                <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                    <Text style={{fontSize:24,margin:10, color:'#b3b3b3'}}>Larger Storage</Text>
                    <Text style={{fontSize:18, margin:14, color:'#cf6679'}}>+$5/mo</Text>
                </View>
            )
        }
    }

    const displayCS=()=>{
        if(a3){
            return(
                <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                    <Text style={{fontSize:24,margin:10, color:'#b3b3b3'}}>Custom Profile</Text>
                    <Text style={{fontSize:18, margin:14, color:'#cf6679'}}>+$7/mo</Text>
                </View>
            )
        }
    }

    const displayLine=()=>{
        if(a1){
            return(

                <View style={{width:'95%', backgroundColor:'#fff', height:1, marginLeft:'2.5%', marginTop:30}}></View>
            )
        }else if(a2){
            return(

                <View style={{width:'95%', backgroundColor:'#fff', height:1, marginLeft:'2.5%', marginTop:30}}></View>
            )
        }else if(a3){
            return(

                <View style={{width:'95%', backgroundColor:'#fff', height:1, marginLeft:'2.5%', marginTop:30}}></View>
            )
        }
    }


    return(
        <Background>
            
            <View style={{backgroundColor:'#181818',flexDirection:'row', justifyContent:'space-around',alignItems:'center', paddingTop:25,paddingBottom:25, width:"100%", height:'20%'}}>
                <View><Text style={[styles.step, {backgroundColor:page==0?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==0?'black':'white', fontSize:25}]}>1</Text></View>
                <View><Text style={[styles.step, {backgroundColor:page==1?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==1?'black':'white', fontSize:25}]}>2</Text></View>
                <View><Text style={[styles.step, {backgroundColor:page==2?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==2?'black':'white', fontSize:25}]}>3</Text></View>
                <View><Text style={[styles.step, {backgroundColor:page==3?'#b3b3b3':'transparent',height:50,width:50, borderRadius:25, color:page==3?'black':'white', fontSize:25}]}>4</Text></View>
            </View>
            
            <View style={{height:'70%', width:'100%', backgroundColor:'transparent', borderRadius:5, flexDirection:"column", justifyContent:'flex-start', marginLeft:'11%'}}>
                <Text style={{fontSize:35, color:'white', fontWeight:'500', paddingTop:25}}>Finishing up</Text>
                <Text style={{fontSize:18, color:'#b3b3b3'}}>Double Check everything looks OK before confirming.</Text>

                <View style={{width:'90%', backgroundColor:'#303030', justifyContent:'space-between', marginTop:30, borderRadius:15, padding:5}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:35, fontWeight:'600', color:'white'}}>{PlanData.plan}</Text>
                            <Text onPress={()=>{navigation.navigate('Select');}} style={{fontSize:15, color:'#b3b3b3'}}>Change</Text>
                        </View>
                        <Text style={{fontSize:20, color:'#03DAC6', marginRight:20, marginTop:10}}>${iprice}/mo</Text>
                    </View>

                    {displayLine()}
                    
                    {displayOS()}
                    {displayLS()}
                    {displayCS()}
                </View>
                <View style={{flexDirection:"row",width:'99%', justifyContent:'space-between'}}>
                    <Text style={{fontSize:25, color:'white', marginTop:10}}>Total Price</Text>
                    <Text style={{fontSize:20, color:'#ff1178', marginRight:'10%', marginTop:14}}>${total}/Month</Text>
                </View>


            </View>


            
            <View style={{height:100, width:'90%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity disabled={page==0} style={[styles.button, {backgroundColor:page==0?'transparent':'grey'}]} onPress={()=>{navigation.navigate('Addons')}}>
                    <Text style={{fontSize:20, color:page==0?'grey':'white', fontWeight:'600'}}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={page==3} style={[styles.button, {backgroundColor:page==3?'transparent':'grey'}]}>
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

export default Finish; 
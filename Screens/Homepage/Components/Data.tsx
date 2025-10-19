
import {StyleSheet, View,ImageBackground, Image,Text ,Dimensions} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Styles'

import Smalldata from "../Components/Smalldata"

const ScreenWidth=Dimensions.get("window").width
const ScreenHieght=Dimensions.get("window").height

const DataTabs = () => {
    const SmalltabsData=[
        {
        name:"Plastic",value:"50 kg",backcolor:"#3E363F"
    },
    {
        name:"Paper",value:"50 kg",backcolor:"#3E363F"
    },
    {
        name:"Metal",value:"50 kg",backcolor:"#3E363F"
    }
]
  return (

    <View style={Styles.mainbox}>
       
        <View style={Styles.MaindataContainer}>
            <ImageBackground source={require("../../../Assets/Images/HomePage/background.webp")} style={Styles.maindata} 
            resizeMode="cover"
            imageStyle={{borderRadius:10,opacity:0.13,backgroundColor:"green"}}>
                <Text style={[GlobalStyles.Boldfont]}>You've recycled.</Text>
                <Text style={[GlobalStyles.Boldfont]}>10 KG</Text>
                
            </ImageBackground>
           
          
      </View>
      <Text style={[GlobalStyles.heading,{marginTop:"2%"},{fontSize:40}]}>Your impact so far</Text>
     
      <View style={Styles.smalldatacontainer}>
        {
            SmalltabsData.map((value,index)=>(
                <Smalldata key={index} anme={value.name} number={value.value} backcolor={value.backcolor}/>

            ))
        }
      </View>
    </View>
  )
}

const Styles=StyleSheet.create({
    mainbox:{
        width:ScreenWidth*0.95,
        height:ScreenHieght*0.53,
        
        backgroundColor:"#ffffffff",
        marginTop:ScreenHieght*0.03,
        alignItems:"center",
        flexDirection:"column"
        
    },
    Textcontainer:{
        width:"40%",
        height:"100%",
    
        alignItems:"center",
        padding:"6%",
        justifyContent:"center"
    },
    imagecontainer:{
        width:"60%",
        overflow:"hidden",
        height:"100%",
    },
   MaindataContainer:{ width:"100%",
    
    height:ScreenHieght*0.25,
    
    borderRadius:50
    
    ,alignItems:"flex-start", justifyContent:"center", flexDirection:"row" },
    maindata:{
        width:"100%", height:"100%",
        
    
    borderRadius:20
    
    ,alignItems:"flex-start", flexDirection:"column"
    },
    smalldatacontainer:{
        width:"100%",
        height:ScreenHieght*0.2,
        backgroundColor:"#ffffffff",
        padding:"2%",
        alignItems:"flex-start",
        justifyContent:"center",
        flexDirection:"row",
        
        
    }
    
})

export default DataTabs
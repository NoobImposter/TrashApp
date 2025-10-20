import { View, Text,Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Styles'
import { Image } from 'react-native-svg'

const Hieght=Dimensions.get("screen").height
const Pointshower = () => {
  return (
    <View style={style.mainconatiner}>   
      <View style={style.main}>
        <View style={style.Tpoints}>
        <Text style={{fontFamily:"Poppins",fontSize:30}}>T-Points</Text>
        <Text style={[GlobalStyles.Boldfont,{fontSize:30}]} >500 </Text>
        </View>
        


      </View>
    </View>
  )
}

const style=StyleSheet.create({
    mainconatiner:{
        alignItems:"center",
        width:"100%",
        height:Hieght*0.15,
        
    },
    main:{
        width:"100%",
        height:"100%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:30,
        borderWidth:0.5,
        padding:"3%"
    
    },
    Tpoints:{
        width:"50%",
        flexDirection:"coloum",
        justifyContent:"space-around",
        alignItems:"flex-start",
        height:"30%",

    },
    Image:{
        width:"50%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
        height:"30%",
        backgroundColor:""
    },
    
    line:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-start",
        height:"15%",
        backgroundColor:""
    }
})



export default Pointshower
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const ScrenHieght=Dimensions.get("window").height

const RecentTab = ({day,line,kgs,icon}) => {
  return (
    <View style={Styles.mainconstainer}>
      <Text>{day}</Text>
      <Text>{line}</Text>
      <Text>{kgs}</Text>
    </View>
    
  )
}

const Styles=StyleSheet.create({
    mainconstainer:{
        width:"100%",
        height:ScrenHieght*0.15,
        backgroundColor:"",
        borderRadius:40,
        padding:"3%",
        borderColor:"black",
        justifyContent:"center",
        borderWidth:2

    }
})

export default RecentTab
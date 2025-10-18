import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../Styles'

const Smalldata = ({number,anme,backcolor}) => {
  return (
    <View style={[styles.smalldata,{backgroundColor:backcolor}]}>
    
      <Text style={{fontFamily:"Mainfont",fontSize:27,fontWeight:"600",color:"white"}}>{anme}</Text>
      <Text style={{fontFamily:"Numberfont",fontSize:22,color:"white"}}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    smalldata: {
  width: '31.7%',
  height: '100%',
  backgroundColor: '#ffffffff',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 15,
  borderWidth: 2,
  borderColor: 'black',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  // shadowOpacity: 0.3,
  // shadowRadius: 15,
  // elevation: 5,
  margin:"2%"
},


})

export default Smalldata
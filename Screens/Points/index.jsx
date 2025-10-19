import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const PointsHome = () => {

  console.log("Serach is pressed");
  
  return (
    <View style={GlobalStyles.CompnenetsScreen} >
      <View style={style.searchconatiner}>
        <TouchableOpacity >
        <View style={style.Search}>
          <Text style={GlobalStyles.Boldfont}>Search</Text>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={25}></FontAwesomeIcon>
         
          
        </View>
        </TouchableOpacity>
      </View>
  
      <Text>Points</Text>
      <Text>Points</Text>
      <Text>Points</Text>
    </View>
  )
}


const style=StyleSheet.create({
  searchconatiner:{
    width:"100%",
    textAlign:"center",
    height:"10%",
    padding:"2%",
    marginVertical:"2%"
    
 
  },
  Search:{
    borderRadius:80,
    width:"100%",
    height:"100%",
    borderWidth:2,
    textAlign:"center",
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row"
  }
})

export default PointsHome
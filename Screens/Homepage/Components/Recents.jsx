import { View,Text, StyleSheet ,Dimensions} from 'react-native'
import React from 'react'


const height=Dimensions.get("window").height
const Recents = () => {
  return (
    <View  style={Styles.maincontainer}>
        <Text>Hello</Text>
     
    
    </View>
  )
}



const Styles=StyleSheet.create({
    maincontainer:{
        width:"100%",
        height:height*0.45,
        backgroundColor:"white",
        alignItems:"center",
        flexDirection:"column"
    
    }
})

export default Recents
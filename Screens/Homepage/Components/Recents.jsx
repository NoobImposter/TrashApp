import { View,Text, StyleSheet ,Dimensions,ScrollView} from 'react-native'
import React from 'react'
import RecentTab from './RecentTab'


const height=Dimensions.get("window").height
const width=Dimensions.get("window").width
const Recents = () => {
    const Data=[{
        day:"Tuesday",
        line:"Metal Day",
        wieght:"10 kg"
    },
    {
        day:"Tuesday",
        line:"Metal Day",
        wieght:"10 kg"
    },
    {
        day:"Tuesday",
        line:"Metal Day",
        wieght:"10 kg"
    },


]

  return (
    <View  style={Styles.maincontainer}>

        <View style={{
            width:width*0.95,
            flexDirection:"row",
            alignItems:"flex-start",
            justifyContent:"center"
        }}>
            <View
            style={{width:"50%",
               alignItems:"flex-start"
            }}

            >
                <Text>Recent</Text>
            </View>
            <View
            
               style={{width:"50%",
                alignItems:"flex-end"
                
               }}
            >
                <Text>View More</Text>
            </View>
        </View>
        <ScrollView contentContainerStyle={Styles.scrollcontent}
        showsVerticalScrollIndicator={false}>

        
        {
            Data.map((Value,index)=>(
                <RecentTab key={index} day={Value.day} line={Value.line} kgs={Value.wieght}/>
            ))
        }
        </ScrollView>
    
     
    
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
    },
    scrollcontent:{
        width:width*0.95,
       
        alignItems:"center",
        paddingVertical:10
    }
})

export default Recents
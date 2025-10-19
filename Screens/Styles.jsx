import { StyleSheet ,Dimensions} from "react-native";


const Width =Dimensions.get("window").width
const Hieht=Dimensions.get("window").height


export const GlobalStyles = StyleSheet.create({
    screen:{
        width:Width,
        height:Hieht,

        alignItems:"center",
        
        marginTop:Width*0.02,
            backgroundColor:"#ffffff"
    
    },
    CompnenetsScreen:{
        width:Width*0.95,
        height:Hieht*0.95,
         marginTop:Width*0.02,
          
          alignItems:"center",
        alignSelf:"center",
        flexDirection:"column",
        
        backgroundColor:"#ffffff"

    },
    heading:{
        fontFamily:"Mainfont",
        fontSize:25
        
    },
    Boldfont:{
        fontFamily:"Boldfont",
        fontSize:50,
        opacity:1
    }

})
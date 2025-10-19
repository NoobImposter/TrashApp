import { View } from 'react-native'
import React from 'react'
import Homepage from './Screens/Homepage'
import { NavigationContainer } from '@react-navigation/native'
import { GlobalStyles  } from './Screens/Styles'
import Bottomtabs from "./Screens/Navigation/Bottomtabs"
const App = () => {
  return (
    <NavigationContainer>
 
    <Bottomtabs/>
    </NavigationContainer>
  )
}

export default App
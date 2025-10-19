import { View } from 'react-native'
import React from 'react'
import Homepage from './Screens/Homepage'
import { NavigationContainer } from '@react-navigation/native'
import { GlobalStyles  } from './Screens/Styles'
import Bottomtabs from "./Screens/Navigation/Bottomtabs"
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
 
    <Bottomtabs/>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
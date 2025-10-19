import { View,Text } from 'react-native'
import React from 'react'

import BarCharts from './Components/BarCharts'
import { GlobalStyles } from '../Styles'
import DataTabs from './Components/Data'
import Recents from "../Homepage/Components/Recents"
const Homepage = () => {
  return (
    <View style={[GlobalStyles.CompnenetsScreen,]}>

      <DataTabs/>
      <Recents></Recents>
    
    </View>
  )
}

export default Homepage
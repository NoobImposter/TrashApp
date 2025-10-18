import { View,Text } from 'react-native'
import React from 'react'

import BarCharts from './Components/BarCharts'
import { GlobalStyles } from '../Styles'
import DataTabs from './Components/Data'
const Homepage = () => {
  return (
    <View style={[GlobalStyles.CompnenetsScreen,]}>

      <DataTabs/>
    
    </View>
  )
}

export default Homepage
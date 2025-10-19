import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import  Marketplacehome  from '../Marketplace/index'
import  PointsHome  from '../Points/index'
import  Homepage  from '../Homepage/index'

const Tab = createBottomTabNavigator()

const Bottomtabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarActiveTintColor: '#00bcd4',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name='Home' component={Homepage} />
      <Tab.Screen name='Points' component={PointsHome} />
      <Tab.Screen name='Market' component={Marketplacehome} />
    </Tab.Navigator>
  )
}

export default Bottomtabs

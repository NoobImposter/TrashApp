import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faHome, faGear } from '@fortawesome/free-solid-svg-icons';
import Marketplacehome from '../Marketplace/index';
import PointsHome from '../Points/index';
import Homepage from '../Homepage/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const Bottomtabs = () => {
  const insets = useSafeAreaInsets(); // Get safe area insets

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Points') {
            iconName = faGear;
          } else if (route.name === 'Market') {
            iconName = faUser;
          }
          return <FontAwesomeIcon icon={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: '#7DDE92',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0, // Remove top border for cleaner look
          height: 60 + insets.bottom, // Adjust height for safe area
          paddingBottom: insets.bottom, // Ensure content isn't hidden under safe area
          paddingTop: 10,
          paddingHorizontal: 10,
          borderRadius: 30,
          position: 'absolute', // Fix to bottom
          bottom: 0,
          left: 0,
          right: 0,
          shadowColor: '#000', // Add shadow for depth
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5, // Shadow for Android
        },
      })}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Points" component={PointsHome} />
      <Tab.Screen name="Market" component={Marketplacehome} />
    </Tab.Navigator>
  );
};

export default Bottomtabs;
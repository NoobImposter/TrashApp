import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../Styles';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

const { height: ScreenHeight } = Dimensions.get('window');

const RecentTab = ({ day, line, kgs }) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faStarOfLife} size={20} color="#000" />
     
      
      <View>
        
        
      <Text style={GlobalStyles.heading}>{day}</Text>
      <Text style={styles.text}>{line}</Text>
      </View>
      <Text style={GlobalStyles.Boldfont}>{kgs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ScreenHeight * 0.15, // Fixed height, but can be adjusted
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: '6%',
    borderColor: 'black',
    borderWidth: 2,
    alignItems:"center",
    justifyContent: 'space-between',
    flexDirection:"row",
    marginVertical: 5, // Space between cards
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default RecentTab;
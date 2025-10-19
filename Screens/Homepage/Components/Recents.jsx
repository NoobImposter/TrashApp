import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import RecentTab from './RecentTab';
import { GlobalStyles } from '../../Styles';

const { height, width } = Dimensions.get('window');

const Recents = () => {
  const Data = [
    {
      day: 'Tuesday',
      line: 'Metal Day',
      weight: '10 kg',
    },
    {
      day: 'Tuesday',
      line: 'Metal Day',
      weight: '10 kg',
    },
    {
      day: 'Tuesday',
      line: 'Metal Day',
      weight: '10 kg',
    },
    // Added more items to ensure content exceeds ScrollView height
    {
      day: 'Wednesday',
      line: 'Plastic Day',
      weight: '15 kg',
    },
    {
      day: 'Thursday',
      line: 'Glass Day',
      weight: '12 kg',
    },
  ];

  return (
    <View style={styles.maincontainer}>
      <View
        style={{
          width: width * 0.95,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View style={{ width: '60%', alignItems: 'flex-start' }}>
          <Text style={[GlobalStyles.heading,{fontSize:22}]}>Recent Disposables</Text>
        </View>
        <View style={{ width: '40%', alignItems: 'flex-end' }}>
          <Text style={styles.headerText}>View More</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView} // Added explicit style for ScrollView
        contentContainerStyle={styles.scrollcontent}
        showsVerticalScrollIndicator={true} // Enabled for debugging
      >
        {Data.map((value, index) => (
          <RecentTab
            key={index}
            day={value.day}
            line={value.line}
            kgs={value.weight}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',

    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1, // Allow container to grow
  },
  scrollView: {
    width: '100%', // Ensure ScrollView takes full width
    flexGrow: 1, // Allow ScrollView to expand within parent
  },
  scrollcontent: {
    width: width * 0.95,
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 30, // Ensure last card is fully visible
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Recents;
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MapRenderer } from '../../components/Map'; // Import the MapRenderer component
import styles from '../../styles/Style';
import CarouselComponent from '../../components/CarouselComponent'; // Import the CarouselComponent
import CarouselStyles from '../../styles/CarouselStyles';

const carouselData = [
  { id: 1, content: 'Lot B', motorcycles: 'NA', disabledSpaces: 'NA', faculty: 'NA', PayStation: 'yes' },
  { id: 2, content: 'Lot C',motorcycles: '12', disabledSpaces: '10', faculty: '10', PayStation: 'true' },
  { id: 3, content: 'PS1',motorcycles: '', disabledSpaces: '', faculty: '29', PayStation: 'true' },
  { id: 4, content: 'PS2',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 5, content: 'Lot XYZ',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 6, content: 'Lot N',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 7, content: 'Lot F',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 8, content: 'Lot J',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 9, content: 'Lot K',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 10, content: 'Lot O',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
  { id: 11, content: 'Lot L',motorcycles: '', disabledSpaces: '', faculty: '', PayStation: '' },
];

export default function TabOneScreen() {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Set up an interval to recreate MapRenderer every 5 seconds
    const intervalId = setInterval(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    }, 180000); // Reduced interval for testing

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <View style={styles.container}>
      <View key={refreshKey} style={styles.mapContainer}>
        {/* Your MapRenderer component here */}
        {MapRenderer.render()}
      </View>

      {/* Carousel */}
      <CarouselComponent data={carouselData} />
    </View>
  );
}

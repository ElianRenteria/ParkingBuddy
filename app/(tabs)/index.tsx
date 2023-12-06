import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MapRenderer } from '../../components/Map'; // Import the MapRenderer component
import styles from '../../styles/Style';
import CarouselComponent from '../../components/CarouselComponent'; // Import the CarouselComponent
import CarouselStyles from '../../styles/CarouselStyles';

const carouselData = [
  { id: 1, content: 'Lot B' },
  { id: 2, content: 'Lot C' },
  { id: 3, content: 'PS1' },
  { id: 4, content: 'PS2' },
  { id: 5, content: 'Lot XYZ' },
  { id: 6, content: 'Lot N' },
  { id: 7, content: 'Lot F' },
  { id: 8, content: 'Lot J' },
  { id: 9, content: 'Lot K' },
  { id: 10, content: 'Lot O' },
  { id: 11, content: 'Lot L' },
];

export default function TabOneScreen() {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Set up an interval to recreate MapRenderer every 5 seconds
    const intervalId = setInterval(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    }, 5000); // Reduced interval for testing

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

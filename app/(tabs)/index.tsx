import React, { useState, useEffect } from 'react';
import { View } from '../../components/Themed';
import { useFocusEffect } from '@react-navigation/native'; 
import {MapRenderer} from '../../components/Map'; // Import the MapRenderer component
import styles from '../../styles/Style';

export default function TabOneScreen() {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Set up an interval to recreate MapRenderer every 5 seconds
    const intervalId = setInterval(() => {
      setRefreshKey(prevKey => prevKey + 1);
    }, 180000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <View key={refreshKey} style={styles.mapContainer}>
      {MapRenderer.render()}
    </View>
  );
}


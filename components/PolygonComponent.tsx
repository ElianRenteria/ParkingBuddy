import React, { useEffect, useState } from 'react';
import MapView, { Polygon, LatLng } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import FirebaseClient from './FirebaseClient';

interface PolygonComponentProps {
  lotId: string;
}

const PolygonComponent: React.FC<PolygonComponentProps> = ({ lotId }) => {
  const [coordinates, setCoordinates] = useState<LatLng[][]>([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const data = await FirebaseClient.getDocument('Lots', lotId, 'sections');

        if (data && data.length > 0) {
          // Convert latitude and longitude strings to numbers for each element in data
          const parsedCoordinatesArray = data.map((item: any) => {
            const itemCoordinates = item['shape'].map((coord: { latitude: string, longitude: string }) => ({
              latitude: parseFloat(coord.latitude),
              longitude: parseFloat(coord.longitude),
            }));
            return itemCoordinates;
          });

          setCoordinates(parsedCoordinatesArray);
        } else {
          console.error('Error fetching coordinates: No documents found for lotId:', lotId);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [lotId]);

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map}>
        {coordinates.map((polygonCoordinates, index) => (
          <Polygon
            key={index}
            coordinates={polygonCoordinates}
            fillColor="rgba(255, 0, 0, 0.5)"
          />
        ))}
      </MapView>
    </View>
  );
};


const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default PolygonComponent;
 
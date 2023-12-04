import { useEffect, useRef } from 'react';
import * as Location from 'expo-location';

const YourComponent: React.FC = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    async function getLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const region = {
          latitude,
          longitude,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        };

        mapRef.current.animateToRegion(region, 500);
      } else {
        // Handle permission denied or restricted case
      }
    }

    getLocation();
  }, []);

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync(); // Request location permissions

    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const region = {
        latitude,
        longitude,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      };
      console.log(latitude, longitude);
      mapRef.current.animateToRegion(region, 500);
      return region;
    } else {
      // Handle permission denied or restricted case
    }
  }

  return <div>Your JSX here</div>;
};

export default YourComponent;

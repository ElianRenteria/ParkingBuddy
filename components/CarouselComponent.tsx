// CarouselComponent.tsx

import React, {useRef} from 'react';
import Carousel, {ICarouselInstance } from 'react-native-reanimated-carousel';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles/CarouselStyles';

const carouselRef = useRef<ICarouselInstance | null>(null);

//Coordinates for CSUSM lots
const csusmCoord = {
    markers: [],
    coordinates: [
      {
        name: "Lot XYZ", latitude: 33.12818710963282, longitude: -117.16400434858764, latitudeDelta: 0.003,
        longitudeDelta: 0.0024, index: 1,
      },
      {
        name: "Lot B", latitude: 33.126669821191214, longitude: -117.16304178645065, latitudeDelta: 0.0023,
        longitudeDelta: 0.0019, index: 2,
      },
      {
        name: "Lot C", latitude: 33.12640540098678, longitude: -117.16106783721526, latitudeDelta: 0.0018,
        longitudeDelta: 0.002, index: 3,
      },
      {
        name: "Lot F", latitude: 33.12588302136077, longitude: -117.15709431991596, latitudeDelta: 0.0023,
        longitudeDelta: 0.0035, index: 4,
      },
      {
        name: "Lot PS1", latitude: 33.13195683534602, longitude: -117.15745221928886, latitudeDelta: 0.0020,
        longitudeDelta: 0.00104, index: 5,
      },
      {
        name: "Lot N", latitude: 33.132603715329026, longitude: -117.15648318361112, latitudeDelta: 0.002,
        longitudeDelta: 0.0009, index: 6,
      },
      { name: "Lot J", latitude: 33.13347804216178, longitude: -117.15331481913803, latitudeDelta: .002, longitudeDelta: .001, index: 7 },
      { name: "Lot K", latitude: 33.134066562234, longitude: -117.15528486384052 + .0001, latitudeDelta: .002, longitudeDelta: .0001, index: 8 },
     // { name: "Lot O", latitude: 33.13277732264146, longitude: -117.15819923081247 + .00001, latitudeDelta: .002, longitudeDelta: .0001, index:9 },
     // { name: "Lot L", latitude: 33.13225349810222, longitude: -117.15945690471221, latitudeDelta: .002, longitudeDelta: .00001, index:10 },
      { name: "PS2", latitude: 33.13385152148427, longitude: -117.16092577290546, latitudeDelta: .002, longitudeDelta: .00005, index: 11 },
  
    ],
  };

  const renderCarouselItem = (item: any) => {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Lot Title */}
          <Text style={styles.cardTitle}>Hello</Text>
        </View>
      </View>
    );
  };
  

const CarouselComponent = () => {
  return (
    <Carousel
      ref={(c) => (carouselRef.current = c)}
      data={csusmCoord.coordinates}
      renderItem={renderCarouselItem}
      width={376}
    />
  );
};

export default CarouselComponent;




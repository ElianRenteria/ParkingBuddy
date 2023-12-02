import  styles from '../../styles/Style';
import {MapRenderer} from '../../components/Map';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import * as React from 'react';


const map = new MapRenderer();

export default function TabOneScreen() {
  return (
    <View style={styles.mapContainer}>
      {MapRenderer.render()}
    </View>
  );
}


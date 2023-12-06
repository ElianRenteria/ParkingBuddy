import React from "react";
import { View } from "react-native";
import MapView, { Marker, Polygon} from 'react-native-maps';
import styles from "../styles/Style";
import firebaseClient from "./FirebaseClient";
import PolygonComponent from "./PolygonComponent";

export class MapRenderer {

// Coordinates for San Marcos
    static sanmarcos: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    } = {
        latitude: 33.1298,
        longitude: -117.1587,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
    };
  
// Coordinates for CSUSM lots
    static csusmCoord: {
        markers: any[]; // You may want to specify a more specific type for markers
        coordinates: {
        name: string;
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
        }[];
    } = {
        markers: [],
        coordinates: [
        { name: "Lot XYZ", latitude: 33.12818710963282, longitude: -117.16400434858764, latitudeDelta: 0.003, longitudeDelta: 0.0024 },
        { name: "Lot B", latitude: 33.126669821191214, longitude: -117.16304178645065, latitudeDelta: 0.0023, longitudeDelta: 0.0019 },
        { name: "Lot C", latitude: 33.12640540098678, longitude: -117.16106783721526, latitudeDelta: 0.0018, longitudeDelta: 0.002 },
        { name: "Lot F", latitude: 33.12588302136077, longitude: -117.15709431991596, latitudeDelta: 0.0023, longitudeDelta: 0.0035 },
        { name: "Lot PS1", latitude: 33.13195683534602, longitude: -117.15745221928886, latitudeDelta: 0.002, longitudeDelta: 0.00104 },
        { name: "Lot N", latitude: 33.132603715329026, longitude: -117.15648318361112, latitudeDelta: 0.002, longitudeDelta: 0.0009 },
        { name: "Lot J", latitude: 33.13347804216178, longitude: -117.15331481913803, latitudeDelta: 0.002, longitudeDelta: 0.001 },
        { name: "Lot K", latitude: 33.134066562234, longitude: -117.15528486384052 + 0.0001, latitudeDelta: 0.002, longitudeDelta: 0.0001 },
        { name: "Lot O", latitude: 33.13277732264146, longitude: -117.15819923081247 + 0.00001, latitudeDelta: 0.002, longitudeDelta: 0.0001 },
        { name: "Lot L", latitude: 33.13225349810222, longitude: -117.15945690471221, latitudeDelta: 0.002, longitudeDelta: 0.00001 },
        { name: "PS2", latitude: 33.13385152148427, longitude: -117.16092577290546, latitudeDelta: 0.002, longitudeDelta: 0.00005 },
        ],
    };



    static render = () => {
        return (
          <MapView
            style={styles.map}
            initialRegion={MapRenderer.sanmarcos}
          >
            {MapRenderer.csusmCoord.coordinates.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                title={marker.name}
              />
            ))}
            <PolygonComponent lotId="B91010D3-9D3D-419F-9A1A-652B118D63F1"/>
            <PolygonComponent lotId="E3C08CD0-C651-42BC-9731-BD04242093DF"/>
            <PolygonComponent lotId="9F5C7E67-509B-484C-AFB3-7FA3D61DE19D"/>
            <PolygonComponent lotId="379A067A-BD85-467E-B6EE-DC53A8952F6D"/>
            <PolygonComponent lotId="33433EE5-4A0A-43B9-BD75-D94C20202343"/>
            <PolygonComponent lotId="0437D8E8-9962-4463-BD24-1DEB6A692BE8"/>
            <PolygonComponent lotId="E2BADC27-8EC4-48ED-8EF4-7A8B6D93E3FC"/>
            <PolygonComponent lotId="A1EA4486-BA97-4A22-9ABD-06FED3A86D7F"/>
            <PolygonComponent lotId="FB30B729-D1D8-4D8F-8A1C-923BD2631D46"/>


            
          </MapView>
        );
      }
      
      
  
}
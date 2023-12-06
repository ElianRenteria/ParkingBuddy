import React, { useEffect, useState } from 'react';
import { StyleSheet,View } from 'react-native';
import { DataTable } from 'react-native-paper';
import firebaseClient from './FirebaseClient';
import HttpClient from './HttpClient';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import styles from '../styles/dataTableStyles';




interface ParkingLot {
    'Lot F': { freeSpaces: number, totalSpaces: number };
    'Lots B and C': { freeSpaces: number, totalSpaces: number };
    'Lot K': { freeSpaces: number, totalSpaces: number };
    'Lot XYZ': { freeSpaces: number, totalSpaces: number };
    'Lots PS1 and N': { freeSpaces: number, totalSpaces: number };
}

// Determine the color for the table row
const colorPick = (OccCurrent: number, OccMax: number): string => {
  if (OccCurrent / OccMax <= 0.1) {
    return '#00ee00';
  } else if (OccCurrent / OccMax <= 0.2) {
    return '#00dd00';
  } else if (OccCurrent / OccMax <= 0.3) {
    return '#00bb00';
  } else if (OccCurrent / OccMax <= 0.4) {
    return '#ddb900';
  } else if (OccCurrent / OccMax <= 0.5) {
    return '#ff9e01';
  } else if (OccCurrent / OccMax <= 0.6) {
    return '#ff8201';
  } else if (OccCurrent / OccMax <= 0.7) {
    return '#ff6501';
  } else if (OccCurrent / OccMax <= 0.8) {
    return '#ff4f01';
  } else if (OccCurrent / OccMax <= 0.9) {
    return '#ff3301';
  } else if (OccCurrent / OccMax <= 1) {
    return '#ac0000';
  } else {
    return '#00ff00';
  }
};

const Table: React.FC = () => {
  const [parkingData, setParkingData] = useState<ParkingLot>();
  const [dataLoaded, setDataLoaded] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data
        const data: Array<any> = await HttpClient.getOverview();
  
        const sortedData = {
          'Lot F': { freeSpaces: parseInt(data[0]['0']['total_spaces'],10)-parseInt(data[0]['0']['free_spaces'],10), totalSpaces: parseInt(data[0]['0']['total_spaces'],10)},
          'Lots B and C': { freeSpaces: parseInt(data[0]['3']['total_spaces'],10)-parseInt(data[0]['3']['free_spaces'],10), totalSpaces: parseInt(data[0]['3']['total_spaces'],10)},
          'Lot K': { freeSpaces: parseInt(data[0]['5']['total_spaces'],10)-parseInt(data[0]['5']['free_spaces'],10), totalSpaces: parseInt(data[0]['5']['total_spaces'],10)},
          'Lot XYZ': { freeSpaces: parseInt(data[0]['7']['total_spaces'],10)-parseInt(data[0]['7']['free_spaces'],10), totalSpaces: parseInt(data[0]['7']['total_spaces'],10)},
          'Lots PS1 and N': { freeSpaces: parseInt(data[0]['6']['total_spaces'],10)-parseInt(data[0]['6']['free_spaces'],10), totalSpaces: parseInt(data[0]['6']['total_spaces'],10)},
        };
        //console.log(sortedData);

        setParkingData(sortedData);
        setDataLoaded(true);
        //console.log(parkingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  if (!dataLoaded) {
    return null;
  }
  
  

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Parking Lot</DataTable.Title>
        <DataTable.Title>Occupancy</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row style={[styles.row, { backgroundColor: colorPick(parkingData?.['Lot F']?.['freeSpaces'] || 0, parkingData?.['Lot F']?.['totalSpaces'] || 0) }]}>
        <DataTable.Cell>Lot F</DataTable.Cell>
        <DataTable.Cell>
            {parkingData?.['Lot F']?.['freeSpaces'] !== undefined && parkingData?.['Lot F']?.['totalSpaces'] !== undefined
            ? `${parkingData['Lot F']['freeSpaces']}/${parkingData['Lot F']['totalSpaces']}`
            : 'N/A'}
        </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row style={[styles.row, { backgroundColor: colorPick(parkingData?.['Lots B and C']?.['freeSpaces'] || 0, parkingData?.['Lots B and C']?.['totalSpaces'] || 0) }]}>
        <DataTable.Cell>Lots B and C</DataTable.Cell>
        <DataTable.Cell>
            {parkingData?.['Lots B and C']?.['freeSpaces'] !== undefined && parkingData?.['Lots B and C']?.['totalSpaces'] !== undefined
            ? `${parkingData['Lots B and C']['freeSpaces']}/${parkingData['Lots B and C']['totalSpaces']}`
            : 'N/A'}
        </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row style={[styles.row, { backgroundColor: colorPick(parkingData?.['Lot K']?.['freeSpaces'] || 0, parkingData?.['Lot K']?.['totalSpaces'] || 0) }]}>
        <DataTable.Cell>Lot K</DataTable.Cell>
        <DataTable.Cell>
            {parkingData?.['Lot K']?.['freeSpaces'] !== undefined && parkingData?.['Lot K']?.['totalSpaces'] !== undefined
            ? `${parkingData['Lot K']['freeSpaces']}/${parkingData['Lot K']['totalSpaces']}`
            : 'N/A'}
        </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row style={[styles.row, { backgroundColor: colorPick(parkingData?.['Lot XYZ']?.['freeSpaces'] || 0, parkingData?.['Lot XYZ']?.['totalSpaces'] || 0) }]}>
        <DataTable.Cell>Lot XYZ</DataTable.Cell>
        <DataTable.Cell>
            {parkingData?.['Lot XYZ']?.['freeSpaces'] !== undefined && parkingData?.['Lot XYZ']?.['totalSpaces'] !== undefined
            ? `${parkingData['Lot XYZ']['freeSpaces']}/${parkingData['Lot XYZ']['totalSpaces']}`
            : 'N/A'}
        </DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row style={[styles.row, { backgroundColor: colorPick(parkingData?.['Lots PS1 and N']?.['freeSpaces'] || 0, parkingData?.['Lots PS1 and N']?.['totalSpaces'] || 0) },{borderBottomLeftRadius:10},{borderBottomRightRadius:10}]}>
        <DataTable.Cell>Lots PS1 and N</DataTable.Cell>
        <DataTable.Cell>
            {parkingData?.['Lots PS1 and N']?.['freeSpaces'] !== undefined && parkingData?.['Lots PS1 and N']?.['totalSpaces'] !== undefined
            ? `${parkingData['Lots PS1 and N']['freeSpaces']}/${parkingData['Lots PS1 and N']['totalSpaces']}`
            : 'N/A'}
        </DataTable.Cell>
    </DataTable.Row>
    </DataTable>
  );
};

export default Table;



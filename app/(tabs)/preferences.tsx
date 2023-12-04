import styles from '../../styles/Style';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Button,Text} from 'react-native';
import {View} from '../../components/Themed';
import * as React from 'react';
import { router } from 'expo-router';

export default function preferences() {
  const Logout = () => {
    router.push('/');
  }
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title='Logout' onPress={Logout}/>
    </View>
  );
}

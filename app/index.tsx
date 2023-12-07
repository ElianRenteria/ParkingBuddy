import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import loginStyles from '../styles/loginStyle';
import firebaseClient from '../components/FirebaseClient';
import { getUrlWithReactNavigationConcessions } from 'expo-router/build/fork/getStateFromPath';
import { router } from 'expo-router';
import { useColorScheme, Image} from 'react-native';

const colorScheme = useColorScheme();

type LoginScreenProps = {
  onLogin: (username: string, password: string) => {
  };
};

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Call the onLogin function with the provided username and password

      // Assuming firebaseClient is defined and has a getDocument method
      const doc = await firebaseClient.getDocument('Users',username);
      //console.log(doc);

      if (doc != null) {
        //console.log('Document data:', doc);
        //onLogin(username, password);
        if (doc['password'] == password){
          console.log('Login Successful');
          router.push('/(tabs)');
        }
        else{
          console.log('Login Failed');
        }
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log('Error getting document:', error);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Image
        source={require('../styles/assets/logo.png')} // Replace with the path to your image
        style={loginStyles.logo}
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={loginStyles.signUpContainer}>
        <Button title='Login' onPress={handleLogin} color={colorScheme === 'dark' ? 'white' : 'rgb(40,40,40)'}/>
      </View>
      <View style={loginStyles.signUpContainer}>
        <Button color={colorScheme === 'dark' ? 'white' : 'rgb(40,40,40)'} title="Sign Up" onPress={() => router.push('/SignUp')} />
      </View>
    </View>
  );
};



export default LoginScreen;

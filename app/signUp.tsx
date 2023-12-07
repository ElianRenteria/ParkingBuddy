import { View, Text, TextInput, Button } from 'react-native'
import loginStyles from '../styles/loginStyle';
import React, { useState } from 'react';
import { router } from 'expo-router';
import firebaseClient from '../components/FirebaseClient';
import { useColorScheme } from 'react-native';


const colorScheme = useColorScheme();



const signUp = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSignUp = async () => {
        try {
          const exists = await firebaseClient.checkUserExists(user);
    
          if (exists == false) {
            firebaseClient.addUser(user, pass);
            console.log('Signup Successful');
            router.push('/');
          } else {
            console.log('username already exists');
          }
        } catch (error) {
          console.log('Error getting document:', error);
        }
      };

    return (
        <View style={loginStyles.container}>
            <Text style={loginStyles.title}>SignUp</Text>
            <TextInput
                style={loginStyles.input}
                placeholder="Username"
                value={user}
                onChangeText={setUser}
            />
            <TextInput
                style={loginStyles.input}
                placeholder="Password"
                value={pass}
                onChangeText={setPass}
                secureTextEntry
            />
            <View style={loginStyles.signUp2Container}>
              <Button title="Create Account" onPress={handleSignUp} color = {colorScheme === 'dark' ? 'white' : 'rgba(40,40,40)'}/>
            </View>
        </View>
    )
}

export default signUp
import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';


const colorScheme = useColorScheme();
const loginStyles = StyleSheet.create({
  logo:{
    height: 106,
    width: 240,
    marginBottom: 20
  },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? 'rgb(40,40,40)' : 'white',
    },
    title: {
      fontSize: 20,
      marginBottom: 16,
      color: colorScheme === 'dark' ? 'white' : 'black',
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: colorScheme === 'dark' ? 'white' : 'grey',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 8,
      color: colorScheme === 'dark' ? 'white' : 'black',
    },
    signUpContainer:{
      marginTop: 20,
      width:150,
      height: 50,
      backgroundColor: colorScheme === 'dark' ? 'rgb(40,40,40)':'white',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 4,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? 'white' : 'rgb(40,40,40)',
    },
    signUp2Container:{
      marginTop: 20,
      width:200,
      height: 60,
      backgroundColor: colorScheme === 'dark' ? 'rgb(40,40,40)':'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? 'white' : 'rgb(40,40,40)',
    }
  });

  export default loginStyles;
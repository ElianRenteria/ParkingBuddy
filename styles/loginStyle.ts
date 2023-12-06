import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';


const colorScheme = useColorScheme();
const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
  });

  export default loginStyles;
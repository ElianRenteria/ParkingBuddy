import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme();
const announcementStyle = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: colorScheme === 'dark' ? '#282828' : 'white',
    },
    historyIcon: {
      position: 'absolute',
      top: 20, // Adjust as needed for your header
      right: 20,
      zIndex: 10, // Make sure it floats above other components
    },
    cardContainer: {
      backgroundColor: colorScheme === 'dark' ? '#282828' : 'white',
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'transparent',
      paddingTop: 60, // Adjust this value based on the size of your bell icon
    },
    addButton: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? 'white' : '#282828', // Adjust color as needed
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    colorPickerTitle: {
      fontSize: 16,
      marginTop: 10,
    },
    colorOptionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      marginBottom: 20,
    },
    colorOption: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2, // Add a border
      borderColor: '#000000', // Make the border black
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 50, // Adjust as needed
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    input: {
      width: '80%', // Adjust as needed
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
    },
  });

  export default announcementStyle;
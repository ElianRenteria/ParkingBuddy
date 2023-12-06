import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 0,
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'flex-end',
      borderRadius: 10,

    },
    tableHeader: {
      backgroundColor: '#CBCBCB',
      flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 50,
    },
    row: {
      padding: 5,
      backgroundColor: '#DCDCDC',
    },
  });


  export default styles;
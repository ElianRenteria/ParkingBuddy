import { StyleSheet } from 'react-native';


const CarouselStyles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    banner: {
      backgroundColor: 'yellow',
      padding: 10,
      alignItems: 'center',
    },
    carousel: {
      position: 'absolute',
      bottom: -30,
      marginBottom: 48,
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'center',
      backgroundColor: 'white',
      height: 200,
      width: 370,
      padding: 24,
      borderRadius: 24,
    },
    parkingfeatureContainer:{
      flexDirection: 'column',
    },
    animatedContainer: {
      position: 'absolute',
      width: "100%",
      height: 100,
      bottom: 0,
      left: 0,
      backgroundColor: 'red',
    },
    cardImage: {
      height: 120,
      width: 300,
      bottom: 0,
      position: 'absolute',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    cardTitle: {
      color: 'black',
      fontSize: 22,
      alignSelf: 'center'
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    heading:{
      color: 'black',
      position: 'absolute',
      fontWeight: 'bold',
      top: '83.5%', // Position the heading at the vertical center of the cardContainer
      left: '50%', // Position the heading at the horizontal center of the cardContainer
      transform: [{ translateX: -80 }, { translateY: 65 }], // Center the heading precisely
      padding: 12, // Add some padding for better visibility
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Match the background of the container
    },
    buttonContainer: {
      justifyContent: 'flex-end', // Vertically align to the bottom
      alignItems: 'center', // Horizontally align to the center
      height: 40,
      width: 300,
      borderRadius: 12,
      left: '5%', // Position the button at the horizontal center of the cardContainer
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#00FF00',
      borderWidth: 1,
      borderColor: '#fff'
    },
    selectLot: {
      color: 'red',
      position: 'absolute',
      backgroundColor: 'white',
    },
    cardText: {
      color: 'black',
      fontSize: 16,
    },
    freeSpacesValue: {
      color: '#90EE90',
      fontSize: 16,
    },
    expandedCard: {
      height: 500, // You can adjust the height as needed
    },
    inputBox: {
      color: 'white',
      backgroundColor: 'white',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: 16,
    },
    dividerLine:{
      marginTop:10,
      marginBottom: 10,
    },
    infoText:{
      color: 'gray',
      position: 'relative',
      fontSize: 12,
      marginBottom: 5,
    },
     subHeading:{
      color: 'black',
      position: 'relative',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    listviewButton:{
      position: 'absolute', 
      top: 16, 
      right: 16, 
      zIndex: 1,
    },
  
});
  

export default CarouselStyles;
import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const colorScheme = useColorScheme();
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colorScheme === 'dark' ? 'white' : '#282828',
        padding: 20,
        margin: 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    deleteButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Ensure it's above other elements
    },
    textContainer: {
        flex: 1,
        marginRight: 10, // Give space for the image
    },
    title: {
        fontSize: 18,
        color: colorScheme === 'dark' ? '#282828' : 'white',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: colorScheme === 'dark' ? '#282828' : 'white',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});

export default styles;
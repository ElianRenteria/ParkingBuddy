import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselStyles from '../styles/CarouselStyles';
import styles from '../styles/CarouselStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from '@rneui/themed';
import c from './getReportedParked';
import firebaseClient from './FirebaseClient';

interface CarouselComponentProps {
  data: { id: number; content: string; motorcycles: string; disabledSpaces: string; faculty: string; PayStation: string }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ data }) => {
  const [isCardExpanded, setIsCardExpanded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [floors, setFloors] = useState<any[]>([]); // Adjust the type according to your data structure
  const [parkedButtonPressed, setParkedButtonPressed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const [parkingData, setParkingData] = useState<Record<string, number>>({});

  const handlePress = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  useEffect(() => {
    const fetchParkingData = async () => {
      const fetchedData: Record<string, number> = {};

      // Use Promise.all to handle multiple async calls concurrently
      await Promise.all(
        data.map(async (item) => {
          const reportedParked = await c.getReportedParked(item.content);
          // Use a default value (e.g., 0) in case reportedParked is undefined or not a number
          fetchedData[item.content] = typeof reportedParked === 'number' ? reportedParked : 0;
        })
      );

      setParkingData(fetchedData);
    };

    fetchParkingData();
  }, [data]);


  const containerStyle = [
    styles.shadowProp,
    styles.cardContainer,
    { height: isCardExpanded ? 400 : 200 },
  ];

  const renderCarouselItem = ({ item }: { item: { id: number; content: string; motorcycles: string; disabledSpaces: string; faculty: string; PayStation: string } }) => (
    <View style={containerStyle}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Lot Title */}
        <Text style={styles.cardTitle}>{item.content}</Text>
        <Text style={styles.cardText}>Reported Parked: {parkingData[item.content]}</Text>

        {/*If item.name === Ps1 then execute stuff in parenthesis following ?, if not then execute stuff after null*/}
        {item.content === 'Lot PS1' ? (
          <View style={{ position: 'relative', height: 50, zIndex: 2, width: 150 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={floors}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setFloors}
              placeholder={'Choose a floor'}
              style={{ zIndex: 1000 }}
            />
          </View>
        ) : null}

        {/* Expand Button */}
        <TouchableOpacity onPress={handlePress}>
          {/* If card is expanded, use chevron down, else do chevron up*/}
          <Icon name={isCardExpanded ? 'chevron-down' : 'chevron-up'} size={24} />
        </TouchableOpacity>
      </View>

      <Divider style={styles.dividerLine} inset={true} insetType="right" />

      {/*When the card is expanded, add more info under free spaces*/}
      {isCardExpanded && (
        <View>
          <Text style={styles.subHeading}>Parking Features</Text>
          <Text style={styles.infoText}>Motorcycle Parking: {item.motorcycles}</Text>
          <Text style={styles.infoText}>Disabled Parking: {item.disabledSpaces}</Text>
          <Text style={styles.infoText}>Faculty Parking: {item.faculty}</Text>
          <Text style={styles.infoText}>Paystation: {item.PayStation}</Text>

          <Divider style={styles.dividerLine} inset={true} insetType="right" />
        </View>
      )}
      <TouchableOpacity
          style={[
            styles.buttonContainer,
            isCardExpanded && { backgroundColor: 'red' },
            selectedCard === item.content
              ? { backgroundColor: 'green' } //If a button is pressed, the button turns green
              : parkedButtonPressed
                ? { backgroundColor: 'grey' } //If a button is pressed, all other buttons are grey
                : { backgroundColor: '#00FF00' }, //This is the default state, if no button has been pressed
          ]}
          onPress={() => {
            if (selectedCard === item.content) {
              //If the button on the parked card is pressed again
              setParkedButtonPressed(false); //Set that no button has been pressed i.e. user left parking lot
              //leaveAlert(item);
            } else {
              //When a button is pressed for the first time
              //parkAlert(item);
              setParkedButtonPressed(true); //Set that a button has been pressed i.e. user has parked
              setSelectedCard(item.content); //Set selectedCard to the one where the user is parking
            }
          }}
          disabled={parkedButtonPressed && selectedCard !== item.content} //Disable all buttons except for the "parked" one
        >
          <Text style={styles.cardText}>{selectedCard === item.content ? 'Leave' : 'Park'}</Text>
        </TouchableOpacity>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderCarouselItem}
      containerCustomStyle={CarouselStyles.carousel}
      sliderWidth={Dimensions.get('window').width} // Set it to the width of your screen
      itemWidth={376} // Set it to the width of a single card item
      removeClippedSubviews={false}
    />
  );
};

export default CarouselComponent;


import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselStyles from '../styles/CarouselStyles'

interface CarouselComponentProps {
  data: { id: number; content: string }[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ data }) => {
  const renderCarouselItem = ({ item }: { item: { id: number; content: string } }) => (
    <View style={CarouselStyles.cardContainer}>
      <Text style={CarouselStyles.cardTitle}>{item.content}</Text>
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

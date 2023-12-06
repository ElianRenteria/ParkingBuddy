import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useColorScheme } from 'react-native';
import styles from '../styles/announcementCardStyle';



interface AnnouncementCardProps {
    id: number;
    title: string;
    text: string;
    onDelete: (id: number) => void;
    backgroundColor: string;
  }
  
  const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
    id,
    title,
    text,
    onDelete,
  }) => {
    const colorScheme = useColorScheme();
  
    return (
      <View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(id)}>
          <Icon name="x" type="feather" color="#fff" />
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default AnnouncementCard;
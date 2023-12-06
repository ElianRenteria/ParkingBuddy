import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView,StyleSheet,View,Image,TouchableOpacity,Modal,Text,TextInput,Button,} from 'react-native';
import announcementStyle from '../../styles/announcementStyle';
import { useColorScheme } from 'react-native';
import {Icon } from 'react-native-elements';
import AnnouncementCard from '../../components/AnnouncementCard';
import NotificationHistory from '../../components/NotificationHistory';


interface Announcement {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
}

const NotificationsScreen: React.FC = () => {
  const colorScheme = useColorScheme();

  const selectColor = (color: string) => {
    setNewAnnouncement({ ...newAnnouncement, backgroundColor: color });
  };

  const [isHistoryVisible, setHistoryVisible] = useState(false);
  const notifications: any[] = [];

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const colorOptions = ['#FFFFFF', '#FF5733', '#33FF57', '#3357FF', '#F333FF'];

  const [newAnnouncement, setNewAnnouncement] = useState<Announcement>({
    id: 0,
    title: '',
    description: '',
    backgroundColor: '#FFFFFF',
  });

  const handleAddAnnouncement = () => {
    const newId = Math.max(0, ...announcements.map((a) => a.id)) + 1;
    const announcementToAdd = { ...newAnnouncement, id: newId };

    setAnnouncements([...announcements, announcementToAdd]);
    setNewAnnouncement({
      id: 0,
      title: '',
      description: '',
      backgroundColor: '#FFFFFF',
    });
    setAddModalVisible(false);

    saveAnnouncements(announcements);
  };

  const saveAnnouncementsToStorage = async (announcements: Announcement[]) => {
    try {
      const jsonValue = JSON.stringify(announcements);
      await AsyncStorage.setItem('@announcements', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const addAnnouncement = (newAnnouncement: Announcement) => {
    setAnnouncements([...announcements, newAnnouncement]);
    saveAnnouncements([...announcements, newAnnouncement]);
  };

  const editAnnouncement = (editedAnnouncement: Announcement) => {
    const updatedAnnouncements = announcements.map((announcement) =>
      announcement.id === editedAnnouncement.id ? editedAnnouncement : announcement
    );
    setAnnouncements(updatedAnnouncements);
    saveAnnouncements(updatedAnnouncements);
  };

  const deleteAnnouncement = (id: number) => {
    const updatedAnnouncements = announcements.filter((announcement) => announcement.id !== id);
    setAnnouncements(updatedAnnouncements);
    saveAnnouncementsToStorage(updatedAnnouncements);
  };

  const saveAnnouncements = async (newAnnouncements: Announcement[]) => {
    await AsyncStorage.setItem('announcements', JSON.stringify(newAnnouncements));
  };

  const loadAnnouncementsFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@announcements');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const loadedAnnouncements = await loadAnnouncementsFromStorage();
      setAnnouncements(loadedAnnouncements);
    };

    fetchAnnouncements();
  }, []);

  const toggleHistory = () => {
    setHistoryVisible(!isHistoryVisible);
  };

  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const handleAddPress = () => {
    setAddModalVisible(true);
  };

  const handleCloseAddModal = () => {
    setAddModalVisible(false);
  };

  return (
    <View style={announcementStyle.container}>
      <TouchableOpacity onPress={toggleHistory} style={announcementStyle.historyIcon}>
        <Icon name="bell" type="feather" color={colorScheme === 'dark' ? 'white' : '#282828'} />
      </TouchableOpacity>

      <ScrollView style={announcementStyle.scrollView}>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            id={announcement.id}
            title={announcement.title}
            text={announcement.description}
            backgroundColor={announcement.backgroundColor}
            onDelete={deleteAnnouncement}
          />
        ))}
      </ScrollView>

      <NotificationHistory isVisible={isHistoryVisible} onClose={toggleHistory} notifications={notifications} />

      <TouchableOpacity onPress={() => setAddModalVisible(true)} style={announcementStyle.addButton}>
        <Icon name="plus" type="feather" color={colorScheme === 'dark' ? '#282828' : 'white'} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={handleCloseAddModal}
      >
        <View style={announcementStyle.modalView}>
          <Text style={announcementStyle.modalTitle}>Create Announcement</Text>
          <TouchableOpacity onPress={handleCloseAddModal} style={announcementStyle.closeButton}>
            <Icon name="x" type="feather" color="#282828" />
          </TouchableOpacity>
          <TextInput
            style={announcementStyle.input}
            onChangeText={(text) => setNewAnnouncement({ ...newAnnouncement, title: text })}
            value={newAnnouncement.title}
            placeholder="Title"
          />
          <TextInput
            style={announcementStyle.input}
            onChangeText={(text) => setNewAnnouncement({ ...newAnnouncement, description: text })}
            value={newAnnouncement.description}
            placeholder="Description"
            multiline
          />

          <Button title="Create Announcement" onPress={handleAddAnnouncement} />
        </View>
      </Modal>
    </View>
  );
};

export default NotificationsScreen;

import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  ScrollView, Keyboard, SafeAreaView, TouchableWithoutFeedback
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native';

const ProfileScreen = () => {
  // State to store user profile data and image
  const [name, setName] = useState('Heshan Nirmitha');
  const [username, setUsername] = useState('User_Name');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  type GymHistoryItem = {
    id: string;
    Date: string;
    ArrivedTime: string;
    LeftTime: string;
    ScheduleNumber: string;
  };
  
  // Sample gym visit history data
  const gymHistory = [
    { id: '1', Date: '2025-01-30', ArrivedTime: '08:00 AM', LeftTime: '09:30 AM', ScheduleNumber: '1' },
    { id: '2', Date: '2025-01-28', ArrivedTime: '07:30 AM', LeftTime: '09:00 AM', ScheduleNumber: '2' },
    { id: '3', Date: '2025-01-26', ArrivedTime: '08:15 AM', LeftTime: '09:45 AM', ScheduleNumber: '3' },
    { id: '4', Date: '2025-01-24', ArrivedTime: '07:45 AM', LeftTime: '09:00 AM', ScheduleNumber: '1' },
    { id: '5', Date: '2025-01-22', ArrivedTime: '08:30 AM', LeftTime: '10:00 AM', ScheduleNumber: '2' },
    { id: '6', Date: '2025-01-20', ArrivedTime: '07:50 AM', LeftTime: '09:20 AM', ScheduleNumber: '2' },
    { id: '7', Date: '2025-01-18', ArrivedTime: '09:00 AM', LeftTime: '10:30 AM', ScheduleNumber: '3' },
    { id: '8', Date: '2025-01-16', ArrivedTime: '06:30 AM', LeftTime: '08:00 AM', ScheduleNumber: '2' },
    { id: '9', Date: '2025-02-24', ArrivedTime: '10:00 AM', LeftTime: '11:30 AM', ScheduleNumber: '1' },
    { id: '10', Date: '2025-02-28', ArrivedTime: '09:30 AM', LeftTime: '11:00 AM', ScheduleNumber: '3' },
    { id: '11', Date: '2025-02-26', ArrivedTime: '08:45 AM', LeftTime: '10:15 AM', ScheduleNumber: '2' },
    { id: '12', Date: '2025-03-24', ArrivedTime: '07:15 AM', LeftTime: '08:45 AM', ScheduleNumber: '1' },
    { id: '13', Date: '2025-03-22', ArrivedTime: '08:00 AM', LeftTime: '09:30 AM', ScheduleNumber: '2' },
    { id: '14', Date: '2025-03-20', ArrivedTime: '07:40 AM', LeftTime: '09:10 AM', ScheduleNumber: '2' },
    { id: '15', Date: '2025-02-18', ArrivedTime: '09:10 AM', LeftTime: '10:40 AM', ScheduleNumber: '1' },
    { id: '16', Date: '2025-04-16', ArrivedTime: '06:40 AM', LeftTime: '08:10 AM', ScheduleNumber: '1' }
  ];

  // Function to pick an image from the library
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Set the selected image URI to state
    }
  };
  const renderGymHistoryItem = (item: GymHistoryItem) => (
    <View
      key={item.id}
      className="flex-row justify-between py-4 px-1 gap-6 bg-white border-b border-gray-800"
    >
      <Text className="text-black w-1/3 text-center font-semibold">{item.Date}</Text>
      <Text className="text-black w-2/3 text-center font-medium">
        {item.ArrivedTime} - {item.LeftTime}
      </Text>
      <View
        className="absolute bg-blue-600 w-4 h-7 rounded-full justify-center items-center"
        style={{
          top: 10,
          right: 10,
        }}
      >
        <Text className="text-white font-bold">{item.ScheduleNumber}</Text>
      </View>
    </View>
  );
  
  // Hide menu when keyboard is hidden
  useEffect(() => {
    const hideMenu = () => {
      setMenuVisible(false); // Hide menu
      Keyboard.dismiss(); // Dismiss keyboard
    };

    const keyboardListener = Keyboard.addListener('keyboardDidHide', hideMenu);
    hideMenu(); // Hide menu when the screen loads

    return () => {
      keyboardListener.remove(); // Clean up listener on component unmount
    };
  }, []);

  // Toggle visibility of menu (for "Edit Profile", "Logout", etc.)
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Dismiss the menu if user taps outside */}
      <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
  <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
          {/* Header with logo, title, and menu button */}
          <View className="flex flex-row items-center py-2 justify-between">
            <Image
              source={require('../../../assets/images/logo.webp')}
              className="w-16 h-16 rounded-full"
            />
            <Text className="text-center font-extrabold text-4xl">Profile</Text>
            <TouchableOpacity
              onPress={toggleMenu}
              style={{ marginTop: -15, padding: 10, backgroundColor: '#ffffff', borderRadius: 10 }}
            >
              <Text className="text-black text-5xl">...</Text> {/* Increased text size */}
            </TouchableOpacity>
          </View>

          {/* Profile image and name */}
          <View className="items-center mt-5">
            {/* Profile image - now non-interactive */}
            <View>
              <Image
                source={profileImage ? { uri: profileImage } : require('../../../assets/images/blank-profile-picture-973460_1280.webp')}
                className="w-48 h-48 rounded-full border-2 border-gray-300"
              />
            </View>
            <Text className="text-black text-center mt-5 text-5xl">{name}</Text>
            <Text className="text-gray-600 text-center mt-2 text-2xl">@{username}</Text>
          </View>

          {/* Social media icons */}
          <View className="flex-row justify-center items-center mt-5 space-x-4">
            <TouchableOpacity className="px-2 py-2 rounded-lg">
              <Image
                source={require('../../../assets/images/icons8-facebook-48.png')}
                className="w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity className="px-2 py-2 rounded-lg">
              <Image
                source={require('../../../assets/images/Instergram_Icon.png')}
                className="w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity className="px-2 py-2 rounded-lg">
              <Image
                source={require('../../../assets/images/Whatsapp_Icon.png')}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>
          <View className="w-full h-96 py-4 justify-center rounded-lg mt-10 bg-gray-50 shadow-md">
  <FlatList
    data={gymHistory}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => renderGymHistoryItem(item)}
    nestedScrollEnabled
    showsVerticalScrollIndicator={false}
  />
</View>

          {/* Workout Schedule Button */}
          <TouchableOpacity className="bg-gray-900 w-full px-10 py-7 rounded-lg w-92 h-30 mt-8 flex flex-row justify-between items-center">
            <Text className="text-white text-3xl flex-1 text-center">Workout Schedule</Text>
            <Image
              source={require('../../../assets/images/workoutScheduleIcon.png')}
              className="w-[28px] h-[28px]"
              style={{ tintColor: '#FFFFFF' }}
            />
          </TouchableOpacity>

          {/* Gym History List */}
       

          {/* Menu - Edit Profile, Logout, Settings */}
          {menuVisible && (
            <View className="absolute top-14 right-6 bg-white rounded-lg shadow-lg p-6" style={{ width: 180, height: 180 }}>
              <TouchableOpacity className="py-3 px-5">
                <Text className="text-black text-2xl">Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 px-5">
                <Text className="text-black text-2xl">Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 px-5">
                <Text className="text-black text-2xl">Settings</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ProfileScreen;

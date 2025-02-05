import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  TouchableWithoutFeedback, ScrollView, Keyboard,
  SafeAreaView, ImageBackground
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [name, setName] = useState('Heshan Nirmitha');
  const [username, setUsername] = useState('User_Name');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const gymHistory = [
    { id: '1', Date: '2025-01-30', ArrivedTime: '08:00 AM', LeftTime: '09:30 AM' },
    { id: '2', Date: '2025-01-28', ArrivedTime: '07:30 AM', LeftTime: '09:00 AM' },
    { id: '3', Date: '2025-01-26', ArrivedTime: '08:15 AM', LeftTime: '09:45 AM' },
    { id: '4', Date: '2025-01-24', ArrivedTime: '07:45 AM', LeftTime: '09:00 AM' },
    { id: '5', Date: '2025-01-22', ArrivedTime: '08:30 AM', LeftTime: '10:00 AM' },
    { id: '6', Date: '2025-01-20', ArrivedTime: '07:50 AM', LeftTime: '09:20 AM' },
    { id: '7', Date: '2025-01-18', ArrivedTime: '09:00 AM', LeftTime: '10:30 AM' },
    { id: '8', Date: '2025-01-16', ArrivedTime: '06:30 AM', LeftTime: '08:00 AM' },
    { id: '9', Date: '2025-01-30', ArrivedTime: '10:00 AM', LeftTime: '11:30 AM' },
    { id: '10', Date: '2025-01-28', ArrivedTime: '09:30 AM', LeftTime: '11:00 AM' },
    { id: '11', Date: '2025-01-26', ArrivedTime: '08:45 AM', LeftTime: '10:15 AM' },
    { id: '12', Date: '2025-01-24', ArrivedTime: '07:15 AM', LeftTime: '08:45 AM' },
    { id: '13', Date: '2025-01-22', ArrivedTime: '08:00 AM', LeftTime: '09:30 AM' },
    { id: '14', Date: '2025-01-20', ArrivedTime: '07:40 AM', LeftTime: '09:10 AM' },
    { id: '15', Date: '2025-01-18', ArrivedTime: '09:10 AM', LeftTime: '10:40 AM' },
    { id: '16', Date: '2025-01-16', ArrivedTime: '06:40 AM', LeftTime: '08:10 AM' }
  ];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const hideMenu = () => {
      setMenuVisible(false);
      Keyboard.dismiss();
    };

    const keyboardListener = Keyboard.addListener('keyboardDidHide', hideMenu);
    hideMenu();

    return () => {
      keyboardListener.remove();
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView className='bg-black h-full'>
      <ImageBackground
        source={require('../../../assets/images/pexels-anush-1229356.jpg')}
        resizeMode="cover"
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-1 p-5">
              {/* Upper part in new box */}
              <View className="bg-sky-500/50 blur-md   p-6 rounded-lg mb-6">


                <View className="flex-row items-center justify-between w-full">
                  <Text className="text-white text-4xl font-bold">{username}</Text>
                  <TouchableOpacity onPress={toggleMenu}>
                    <Text className="text-white text-3xl">...</Text>
                  </TouchableOpacity>
                </View>

                {/* Profile Image */}
                <View className='items-center mt-5'>
                  <Image
                    source={profileImage ? { uri: profileImage } : require('../../../assets/images/blank-profile-picture-973460_1280.webp')}
                    className="w-48 h-48 rounded-full border-2 border-white"
                  />
                  <Text className="text-white text-center mt-5 text-5xl">{name}</Text>
                </View>

                {/* Social Links */}
                <View className="flex-1 justify-center items-center mt-5">
                  <View className="flex-row justify-center items-center w-4/5 space-x-4">
                    {/* WhatsApp Icon */}
                    <TouchableOpacity className="px-4 py-2 rounded-lg">
                      <FontAwesome name="whatsapp" size={30} color="#25D366" />
                    </TouchableOpacity>

                    {/* Facebook Icon */}
                    <TouchableOpacity className="px-4 py-2 rounded-lg">
                      <FontAwesome name="facebook" size={30} color="#3b5998" />
                    </TouchableOpacity>

                    {/* Instagram Icon */}
                    <TouchableOpacity className="px-4 py-2 rounded-lg">
                      <FontAwesome name="instagram" size={30} color="#E4405F" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Work Schedule Button */}
              <TouchableOpacity className="bg-sky-500/50 w-full px-10 py-7 rounded-lg mt-8 flex flex-row justify-between items-center">
                <Text className="text-white text-3xl flex-1 text-center">Work Schedule</Text>
                <FontAwesome6 name="dumbbell" size={24} color="white" />
              </TouchableOpacity>

              {/* Gym History Section */}
              <View className=" w-full py-4 font-bold rounded-lg mt-10">
                <View className="flex-row  justify-between mb-3">
                  <Text className="text-white text-lg w-1/3 text-center">Date</Text>
                  <Text className="text-white text-lg w-1/3 text-center">Arrived Time</Text>
                  <Text className="text-white text-lg w-1/3 text-center">Left Time</Text>
                </View>

                {gymHistory.map((item) => (
                  <View key={item.id} className="flex-row justify-between border-b border-gray-200 py-5">
                    <Text className="text-white w-1/3 text-center font-extrabold">{item.Date}</Text>
                    <Text className="text-white w-1/3 text-center font-extrabold">{item.ArrivedTime}</Text>
                    <Text className="text-white w-1/3 text-center font-extrabold">{item.LeftTime}</Text>
                  </View>
                ))}
              </View>

              {/* Menu Options */}
              {menuVisible && (
                <View className="absolute top-16 right-6 bg-gray-800 rounded-lg shadow-lg p-3">
                  <TouchableOpacity className="py-2 px-4">
                    <Text className="text-white">Edit Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="py-2 px-4">
                    <Text className="text-white">Logout</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="py-2 px-4">
                    <Text className="text-white">Settings</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;

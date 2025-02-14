import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TouchableOpacity,StyleSheet, 
  ScrollView, Keyboard, SafeAreaView, TouchableWithoutFeedback,Modal,TextInput, Linking
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  // State to store user profile data and image
  const [name, setName] = useState('Name');
  const [username, setUsername] = useState('User_Name');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [whatsappText, setWhatsappText] = useState('');
  const[InstergramText,setInstagramText]=useState('');

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
  // New state to manage modal visibility for editing profile
  const [isEditModalVisible, setEditModalVisible] = useState(false);

   // State to store social media links
   const [facebookLink, setFacebookLink] = useState('');
   const [instagramLink, setInstagramLink] = useState('');
   const [whatsappLink, setWhatsappLink] = useState('');

    // Temporary state to store changes before saving
  const [tempName, setTempName] = useState(name);
  const [tempUsername, setTempUsername] = useState(username);
  const [tempProfileImage, setTempProfileImage] = useState<string | null>(profileImage);
  const [tempFacebookLink, setTempFacebookLink] = useState(facebookLink);
  const [tempInstagramLink, setTempInstagramLink] = useState(instagramLink);
  const [tempWhatsappLink, setTempWhatsappLink] = useState(whatsappLink);

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

    // Function to handle saving the edited profile details
    const handleSave = () => {
      setName(tempName);
      setUsername(tempUsername);
      setProfileImage(tempProfileImage);
      setFacebookLink(tempFacebookLink);
      setInstagramLink(tempInstagramLink);
      setWhatsappLink(tempWhatsappLink);
      setEditModalVisible(false); // Close the edit modal after saving
    };

      // Function to handle canceling the edit and reverting changes
  const handleCancel = () => {
    setTempName(name);
    setTempUsername(username);
    setTempProfileImage(profileImage);
    setTempFacebookLink(facebookLink);
    setTempInstagramLink(instagramLink);
    setTempWhatsappLink(whatsappLink);
    setEditModalVisible(false); // Close the edit modal without saving changes
  };

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

    // Function to open links
    const openLink = (url: string) => {
      if (url) {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      }
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
          {/* Social Media Links */}
          <View className="flex-row justify-center items-center mt-5 space-x-4 gap-6">
            <TouchableOpacity className="px-2 py-2 rounded-lg flex items-center">
              <Image
                source={require('../../../assets/images/icons8-facebook-48.png')}
                className="w-8 h-8"
              />
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-2 py-2 rounded-lg flex items-center">
              <Image
                source={require('../../../assets/images/Instergram_Icon.png')}
                className="w-8 h-8"
              />
              <Text>Instagram</Text>

            </TouchableOpacity>
            <TouchableOpacity className="px-2 py-2 rounded-lg flex items-center">
              <Image
                source={require('../../../assets/images/Whatsapp_Icon.png')}
                className="w-8 h-8"
              />
              <Text>Whatsapp</Text>
            </TouchableOpacity>

          </View>

          {/* Workout Schedule Button */}
          <TouchableOpacity className="bg-gray-900 w-full px-10 py-7 rounded-lg w-92 h-30 mt-8 flex flex-row justify-between items-center">
            <Text className="text-white text-3xl flex-1 text-center">Workout Schedule</Text>
            <Image
              source={require('../../../assets/images/workoutScheduleIcon.png')}
              className="w-[40px] h-[40px]"
              style={{ tintColor: '#FFFFFF' }}
            />
          </TouchableOpacity>

          {/* Gym History List */}
          <View className="w-full py-4 justify-center rounded-lg mt-10 bg-gray-50 shadow-md">
            {gymHistory
              .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()) // Sort by latest date
              .map((item) => (
                <View
                  key={item.id}
                  className="flex-row justify-between py-4 px-1 gap-6 bg-white border-b border-gray-800"
                >
                  <Text className="text-black w-1/3 text-center font-semibold">{item.Date}</Text>
                  <Text className="text-black w-2/3 text-center font-medium">
                    {item.ArrivedTime} - {item.LeftTime}
                  </Text>

                  {/* Schedule Number Indicator */}
                  <View
                    className="absolute top-0 right-0 bg-blue-600 w-4 h-7 rounded-full justify-center items-center"
                    style={{
                      top: 10,
                      right: 10,
                    }}
                  >
                    <Text className="text-white font-bold">{item.ScheduleNumber}</Text>
                  </View>
                </View>
              ))}
          </View>

          {/* Menu - Edit Profile, Logout, Settings */}
{/* Menu - Edit Profile, Logout, Settings */}
{menuVisible && (
            <View className="absolute top-14 right-6 bg-white rounded-lg shadow-lg p-6" style={{ width: 180, height: 180 }}>
              <TouchableOpacity className="py-3 px-5" onPress={() => setEditModalVisible(true)}>
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
          
                    {/* Modal for Editing Profile */}
                    <Modal visible={isEditModalVisible} animationType="slide">
            <SafeAreaView className="flex-1 bg-white px-4 ">
              {/* Header with Save button */}
              <View className="flex-row justify-between items-center py-4 ">
                <Text className="text-black text-4xl font-bold">Edit Profile</Text>
                <TouchableOpacity onPress={handleSave} className="px-4 py-2 bg-blue-600 rounded-lg">
                  <Text className="text-white text-2xl">Save</Text>
                </TouchableOpacity>
              </View>

              {/* Editable Profile Image */}
              <TouchableOpacity className="items-center mt-12" onPress={pickImage}>
                <Image
                  source={tempProfileImage ? { uri: tempProfileImage } : require('../../../assets/images/blank-profile-picture-973460_1280.webp')}
                  className="w-48 h-48 rounded-full border-2 border-gray-300"
                />
                <Text className="text-blue-600 text-3xl mt-2">Change Profile Picture</Text>
              </TouchableOpacity>

              {/* Editable Name and Username */}
              <TextInput 
                value={tempName}
                onChangeText={setTempName}
                placeholder="Name"
                className="w-full  bg-gray-200 p-4 rounded-lg mt-12 text-2xl"
              />
              <TextInput
                value={tempUsername}
                onChangeText={setTempUsername}
                placeholder="Username"
                className="w-full bg-gray-200 p-4 rounded-lg mt-6 text-2xl"
              />

                <View className="justify-center items-center mt-20 space-x-4 gap-6">
                  {/* Facebook Button */}
                    <View className="flex-row items-center space-x-2 self-start ml-20 bg-gray-200 p-4 rounded-lg">
                    <Image source={require('../../../assets/images/icons8-facebook-48.png')} className="w-8 h-8" />
                    <TextInput
                        placeholder="Enter Facebook link"
                        placeholderTextColor="#ccc"
                        value={facebookLink}
                        onChangeText={setFacebookLink}
                        className='flex-1'
                      />
                      </View>
                    
              

                  {/* Instagram Button */}
                    <View className="flex-row items-center space-x-2 self-start ml-20 bg-gray-200 p-4 rounded-lg">
                    <Image source={require('../../../assets/images/Instergram_Icon.png')} className="w-8 h-8" />
                    <TextInput
                        placeholder="Enter Instagram link"
                        placeholderTextColor="#ccc"
                        value={InstergramText}
                        onChangeText={setInstagramText}
                        className='flex-1'
                      />
                      </View>

                  {/* WhatsApp Button */}
                  <View className="flex-row items-center space-x-2 self-start ml-20   bg-gray-200 p-4 rounded-lg">
                    <Image source={require('../../../assets/images/Whatsapp_Icon.png')} className="w-8 h-8" />
                    <TextInput
                        placeholder="Enter WhatsApp link"
                        placeholderTextColor="#ccc"
                        value={whatsappText}
                        onChangeText={setWhatsappText}
                        className='flex-1'
                      />
                    </View>
                  
                </View>

            
              
              {/* Cancel Button */}
              <TouchableOpacity onPress={handleCancel} className="absolute bottom-5 right-5 px-4 py-2 bg-blue-600 rounded-lg">
                <Text className="text-white text-2xl">Cancel</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </Modal>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ProfileScreen;

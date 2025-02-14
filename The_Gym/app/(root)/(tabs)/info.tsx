import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Feather, FontAwesome5, Foundation } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useWindowDimensions } from 'react-native';

const members = [
  { name: "Vidura Kahandawa", label: "Coach" },
  { name: "Krishmal Gamage", label: "Coach" },
  { name: "Heshan Nirmitha", label: "Coach" },
  { name: "Eshan Deepthika", label: "Coach" },
  { name: "Januda Virusara", label: "Coach" },
  { name: "Vidura Kahandawa", label: "member" },
  { name: "Vidura Kahandawa", label: "member" },
  { name: "Vidura Kahandawa", label: "member" },
  { name: "Vidura Kahandawa", label: "member" },
  { name: "Vidura Kahandawa", label: "member" },
];

const Info = () => {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const { width } = useWindowDimensions();
  const [filterMembers,setFilterMembers] = useState(members)

  const openModal = (event: any) => {
    event.target.measure((fx: any, fy: any, width: any, height: any, px: any, py: any) => {
      setModalPosition({ top: py + height, left: px });
      setModalVisible(true);
    });
  };

  // Function to close modal when tapping outside (only for modal area)
  const closeModal = (event: any) => {
    // Prevent closing if the tap is inside the modal
    if (event.target === event.currentTarget) {
      setModalVisible(false);
    }
  };

  const handleViewProfile = () =>{
    router.push(`/profile`)

  }

  const handleViewInbox = () =>{
    router.push(`/inbox`)

  }

  const handleSerach = (text:string) =>{
    const filterMem = members.filter((mem)=>mem.name.includes(text))
    setFilterMembers(filterMem)
  }

  return (
    <SafeAreaView className="p-2 bg-white">
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="flex flex-row items-center gap-4 justify-center border-b pb-12">
          <TouchableOpacity onPress={() => { router.back() }} className="absolute left-2 top-2">
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-3xl font-bold mt-2">The GYM</Text>
        </View>

        {/* Search Bar */}
        <View className="flex flex-row items-center justify-between mx-8 px-4 rounded-lg bg-accent-100 border border-primary-100 mt-4 py-2">
          <View className="flex flex-1 flex-row items-center justify-start">
            <Feather name="search" size={24} color="black" />
            <TextInput
              value={search}
              placeholder="Search for anything"
              className="text-sm font-rubik text-black-300 ml-2 flex-1 w-full"
              onChangeText={(text) => {
                setSearch(text);
                handleSerach(text);
              }}
            />
          </View>
        </View>

        <View className="mt-5">
          <Text className="text-2xl font-bold">Members</Text>
        </View>

        <View className="mt-5">
          {filterMembers.map((item, index) => (
            <View key={index} className="flex flex-row items-center justify-between border-b mb-1 p-2 rounded-md">
              <View className="flex flex-row gap-2 items-center">
                <Image className="size-12 rounded-full" source={require("../../../assets/images/member.jpg")} />
                <Text>{item.name}</Text>
              </View>
              <View className="flex flex-row items-center gap-4">
                {item.label === "Coach" && <Text className="bg-green-400 p-1 rounded text-sm text-white font-bold">{item.label}</Text>}
                <TouchableOpacity onPress={(e) => openModal(e)} ref={ref => ref?.setNativeProps({ collapsable: false })}>
                  <Feather name="more-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Modal (Popup Menu) */}
        {modalVisible && (
          <TouchableWithoutFeedback onPress={closeModal}>
            <View
              style={{
                position: "absolute",
                top: modalPosition.top,
                left: Math.min(modalPosition.left, width - 160),
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,
                zIndex: 1000
              }}
            >
              {/* Tap outside area to close the modal */}
              <TouchableOpacity className="flex flex-row items-center gap-1" onPress={()=>handleViewProfile()}>
                <FontAwesome5 name="user-alt" size={15} color="black" />
                <Text className="text-lg font-medium">View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center gap-2 mt-2" onPress={()=>handleViewInbox()}>
                <Foundation name="mail" size={20} color="black" />
                <Text className="text-lg font-medium">Inbox</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

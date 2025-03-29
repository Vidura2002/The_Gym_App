import { SafeAreaView, Text, View, ScrollView, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get('window');

const membersData = [
  { id: '1', name: "Vidura Kahandawa", time: "18.20" },
  { id: '2', name: "John Doe", time: "19.00" },
  { id: '3', name: "Jane Smith", time: "17.30" },
  { id: '4', name: "Michael Brown", time: "20.15" },
  { id: '5', name: "Emily Davis", time: "16.45" },
  { id: '6', name: "Chris Wilson", time: "21.00" },
  { id: '7', name: "Sarah Lee", time: "15.30" }
];

const CouchhData = [
  { id: '1', fname: "Vidura", lname: "Kahandawa", time: "18.20" },
  { id: '2', fname: "John", lname: "Doe", time: "19.00" },
  { id: '3', fname: "Jane", lname: "Smith", time: "17.30" },
  { id: '4', fname: "Michael", lname: "Brown", time: "20.15" },
  { id: '5', fname: "Emily", lname: "Davis", time: "16.45" },
  { id: '6', fname: "Chris", lname: "Wilson", time: "21.00" },
  { id: '7', fname: "Sarah", lname: "Lee", time: "15.30" }
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Main Scrollable Content */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingBottom: 100,
          paddingHorizontal: 16
        }}
      >
        {/* Header */}
        <View className="flex-row items-center py-6 mb-6">
          <Image 
            source={require("../../../assets/images/logo.webp")} 
            className="w-16 h-16 rounded-full border-2 border-gray-200"
          />
          <View className="flex-1">
            <Text className="text-center font-bold text-3xl text-gray-900">THE GYM</Text>
          </View>
          <View className="w-16" />
        </View>

        {/* Stats Cards */}
        <View className="flex-row justify-between mb-8">
          <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg mr-3">
            <Text className="text-gray-600 text-lg font-semibold text-center">Current Members</Text>
            <Text className="text-indigo-700 text-4xl font-bold text-center mt-2">37</Text>
            <View className="bg-indigo-100 rounded-full h-2 w-full mt-3">
              <View className="bg-indigo-500 h-2 rounded-full" style={{ width: '75%' }}></View>
            </View>
          </View>

          <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg ml-3">
            <Text className="text-gray-600 text-lg font-semibold text-center">Scheduled</Text>
            <Text className="text-emerald-600 text-4xl font-bold text-center mt-2">13</Text>
            <View className="bg-emerald-100 rounded-full h-2 w-full mt-3">
              <View className="bg-emerald-500 h-2 rounded-full" style={{ width: '35%' }}></View>
            </View>
          </View>
        </View>

        {/* Coaches Section */}
        <View className="mb-8">
          <Text className="text-2xl font-bold mb-4 text-gray-800">Available Coaches</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {CouchhData.map((item) => (
              <View key={item.id} className="mr-4 bg-white p-5 rounded-xl shadow-md items-center">
                <View className="bg-indigo-100 w-24 h-24 rounded-full items-center justify-center mb-3">
                  <Text className="text-indigo-800 text-3xl font-bold">
                    {item.fname.charAt(0)}{item.lname.charAt(0)}
                  </Text>
                </View>
                <Text className="font-bold text-center text-gray-800">{item.fname} {item.lname}</Text>
                <Text className="text-indigo-600 text-sm font-medium text-center mt-1">{item.time}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Members List - Full width without horizontal padding */}
        <View className="w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <View className="px-6 pt-6 pb-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-2xl font-bold text-gray-800">Current Members</Text>
              <TouchableOpacity>
                <Text className="text-indigo-600 font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <FlatList 
            data={membersData}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="px-6">
                <View className="flex-row justify-between items-center py-4 border-b border-gray-100 last:border-0">
                  <View className="flex-row items-center">
                    <View className="bg-indigo-100 w-12 h-12 rounded-full items-center justify-center mr-4">
                      <Text className="text-indigo-700 font-bold">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </Text>
                    </View>
                    <View>
                      <Text className="font-semibold text-gray-800">{item.name}</Text>
                      <Text className="text-gray-500 text-sm">Member since 2023</Text>
                    </View>
                  </View>
                  <View className="bg-indigo-100 px-4 py-2 rounded-full">
                    <Text className="text-indigo-700 font-semibold">{item.time}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Fixed Bottom Button */}
      <View className="absolute bottom-0 left-0 right-0 px-6 pb-6">
        <View className="bg-white px-4 py-4 rounded-full shadow-2xl border border-gray-100">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View>
                <Text className="text-gray-500 text-sm">Ready when you are</Text>
                <Text className="text-lg font-semibold text-gray-800">Start Your Workout</Text>
              </View>
            </View>
            <TouchableOpacity 
              className="bg-green-500 px-8 py-3 rounded-full shadow-lg"
              activeOpacity={0.9}
            >
              <Text className="text-white font-bold text-lg">GO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
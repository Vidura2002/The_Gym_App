import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 60,
        },
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="home" size={24} color={focused ? "white" : "black"} />
          ),
          tabBarStyle: {
            backgroundColor: "white" // You can't use route.name check here
          }
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          tabBarLabel: "Schedule",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="clock" size={24} color={focused ? "white" : "black"} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="user-circle" size={24} color={focused ? "white" : "black"} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          tabBarLabel: "Login",
          headerShown: false,
          // tabBarIcon: ({ color, size, focused }) => (
          //   <Feather name="log-in" size={24} color={focused ? "white" : "black"} />
          // ),
        }}
      />
      
      <Tabs.Screen
        name="admin"
        options={{
          tabBarLabel: "Admin",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="settings" size={24} color={focused ? "white" : "black"} />
          ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          tabBarLabel: "Info",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="info" size={24} color={focused ? "white" : "black"} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign name="message1" size={24} color={focused ? "white" : "black"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
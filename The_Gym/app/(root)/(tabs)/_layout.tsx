import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true, // Show labels
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
    <Tabs.Screen
    name="index"
    options={{
        tabBarLabel: "Home",
        headerShown: false,
    }}
    />

    <Tabs.Screen
    name="register"
    options={{
        tabBarLabel: "Register",
        headerShown: false,
    }}
    />
    
    <Tabs.Screen
    name="profile"
    options={{
        tabBarLabel: "Profile",
        headerShown: false,
    }}
    />
    <Tabs.Screen
    name="login"
    options={{
        tabBarLabel: "Login",
        headerShown: false,
    }}
    />

    </Tabs>
  );
};

export default TabLayout;

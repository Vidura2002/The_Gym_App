import { View, Text,Pressable } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import  AntDesign  from '@expo/vector-icons/AntDesign';
import { Entypo, EvilIcons, Feather, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({route})=>({
        tabBarShowLabel: true, // Show labels
        tabBarStyle: {
          position: "absolute",
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 60,
        },
        tabBarActiveTintColor: "black",
      })}
      
    >
    <Tabs.Screen
    name="index"
    options={({route})=>({
        tabBarLabel: "Home",
        headerShown: false,
        tabBarIcon :({color,size,focused}) => ( 
             <Feather name="home" size={24} color= {focused ? "white" : "black"} />  
        ),
        tabBarItem:{
            backgroundColor: route.name==="index" ? "gray" : "white"
        }
    })}
    />

    <Tabs.Screen

    name="schedule"

    options={{
        tabBarLabel: "Schedule",
        headerShown: false,
        tabBarIcon:({color,size,focused})=> (
            <Feather name="clock" size={24} color="black" />
        )
    }}
    />
    
    <Tabs.Screen
    name="profile"
    options={{
        tabBarLabel: "Profile",
        headerShown: false,
        tabBarIcon:({color,size,focused})=> (
            <FontAwesome5 name="user-circle" size={24} color="black" />
        )
    }}
    />
    <Tabs.Screen
    name="login"
    options={{
        tabBarLabel: "Login",
        headerShown: false,
    }}
    />

    <Tabs.Screen
        name="info"
        options={{
            tabBarLabel:"Info",
            headerShown:false,
            tabBarIcon:({color,size,focused})=> (
                <Feather name="info" size={24} color="black" />
            )
        }}
    />

    </Tabs>
  );
};

export default TabLayout;

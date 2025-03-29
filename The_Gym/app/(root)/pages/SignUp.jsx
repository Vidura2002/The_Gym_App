import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {doc, setDoc } from "firebase/firestore";
import { auth,db } from "../../../config/firebaseConfig";

const SignUp = () => {
  const { firstName, lastName, username, email, password } = useLocalSearchParams();
  const router = useRouter();


  const completeRegistration = async () => {
    console.log("hh")
    try {
        console.log("uu :",email,password)

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("user :",user)

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        username,
        email,
        uid: user.uid,
        createdAt: new Date(),
        profileComplete: false,
        gym: null,
        fitnessGoals: []
      });
      router.navigate("/");
    } catch (error) {
        console.log("error :",error)
      Alert.alert("Registration Error", "There was an issue completing your registration. Please try again.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-900 p-6">
      {/* Welcome Header */}
      <View className="items-center mb-8">
        
        <Text className="text-white text-3xl font-bold mb-2">Welcome to The Gym!</Text>
        <Text className="text-gray-300 text-center text-lg">
          Let's complete your fitness journey setup
        </Text>
      </View>

      {/* User Details Card */}
      <View className="w-full bg-gray-800 rounded-xl p-6 mb-8">
        <Text className="text-white text-xl font-bold mb-4">Your Profile Details</Text>
        
        <View className="mb-4">
          <Text className="text-gray-400 text-sm">Name</Text>
          <Text className="text-white text-lg">{firstName} {lastName}</Text>
        </View>
        
        <View className="mb-4">
          <Text className="text-gray-400 text-sm">Username</Text>
          <Text className="text-white text-lg">@{username}</Text>
        </View>
        
       
      </View>

      {/* Call to Action */}
      <View className="w-full mb-8">
        <Text className="text-white text-lg text-center mb-4">
          You can now add your preferred Gym and continue with your workout plans!
        </Text>
        <Text className="text-gray-400 text-center">
          Complete your profile to get personalized workout recommendations.
        </Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity 
        onPress={completeRegistration}
        className="w-full bg-purple-500 px-6 py-4 rounded-xl shadow-lg"
      >
        <Text className="text-white font-bold text-lg text-center">
          Complete Registration & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
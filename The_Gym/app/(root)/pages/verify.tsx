import React from 'react';
//import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Register = () => {
  // const router = useRouter();
  
  // const signIn = () => {
  //   router.push('/login');
  // };

  return (
    <ImageBackground
      source={require('../../../assets/images/register.jpg')}
      className="flex-1 w-full h-full justify-center items-center"
      resizeMode="cover"
    >
      <View className="absolute inset-0 bg-black opacity-50" />
      <View className="absolute top-10 w-full flex-row items-center justify-center px-5">
        <Image
          source={require('../../../assets/images/logo.webp')}
          className="w-16 h-16 absolute left-5 rounded-full"
          resizeMode="contain"
        />
      
        {/* Header text in the center */}
        <Text className="text-white text-5xl font-bold text-center">
          The GYM
        </Text>
      </View>

      <View className="w-11/12 p-5 rounded-lg items-center">
        <Text className="text-white text-2xl font-bold text-center mb-4">
          Create Your Account
        </Text>
        <Text className="text-gray-300 text-base text-center mb-6">
          Welcome to The Gym, let's achieve your goals!
        </Text>

        {/* <TextInput
          className="w-full bg-white/20 text-white p-4 rounded-lg mb-4 border border-white border-opacity-50 placeholder-gray-300"
          placeholder="First Name"
          placeholderTextColor="#DDD"
        /> */}
        <TextInput
          className="w-full bg-white/20 text-white p-4 rounded-lg mb-4 border border-white border-opacity-50 placeholder-gray-300"
          placeholder="Email"
          placeholderTextColor="#DDD"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="w-full bg-white/20 text-white p-4 rounded-lg mb-4 border border-white border-opacity-50 placeholder-gray-300"
          placeholder="Password"
          placeholderTextColor="#DDD"
          secureTextEntry={true}
        />

        <TouchableOpacity className="bg-green-600 py-3 w-full rounded-lg items-center shadow-lg">
          <Text className="text-white text-lg font-bold">Verify</Text>
        </TouchableOpacity>

        {/* <Text className="text-white text-center mt-4 text-base">
          Already have an account?{' '}
          <TouchableOpacity onPress={signIn}>
            <Text className="text-green-400 font-bold">Login</Text>
          </TouchableOpacity>
        </Text> */}
      </View>
    </ImageBackground>
  );
};

export default Register;

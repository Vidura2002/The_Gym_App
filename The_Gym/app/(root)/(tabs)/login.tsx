import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from '../../../config/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../../context/userSlice';
import { useRouter } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  // Facebook login configuration
 

  // Handle Facebook login

  const loginWithEmail = async () => {

  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Dispatch user data to Redux store
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || '',
      }));
      
      console.log("User logged in:", user);
      router.replace("/"); // Navigate to home
      
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error (show alert, etc.)
    }
  };
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Success', 'Logged in successfully');
    }
  };

  const signIn = () => {
    router.push('../pages/register');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/login1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/images/logo.webp')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>The GYM</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#fff"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
            placeholderTextColor="#fff"
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Icon name={secureText ? 'eye-slash' : 'eye'} size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={loginWithEmail}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or Sign Up Using</Text>
          <View style={styles.iconRow}>
            <TouchableOpacity 
              style={styles.iconButton} 
              
            >
              <Icon name="facebook" size={30} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="twitter" size={30} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="google" size={30} color="#DB4437" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={signIn}>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //transform: [{ translateY: -30 }],
  },
  container: {
    //backgroundColor: 'rgba(248, 252, 254, 0.5)',
    padding: 20,
    borderRadius: 25,
    width: '90%',
    transform: [{ translateY: 90 }],
    paddingBottom: 0,
  },
  headerContainer: {
    //backgroundColor: 'rgba(22, 155, 221, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [{ translateY: 80 }],
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    //marginLeft: 40,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
    marginLeft: -39,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Background color to make text visible
    color: '#fff', // Text color
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Same background for the password input
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    color: '#fff', // Text color
  },
  button: {
    backgroundColor: '#4E4FEB',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    //backgroundColor: 'rgba(22, 155, 221, 0.5)',
    alignItems: 'center',
    marginTop: 40,
    //transform: [{ translateY: 40 }],
  },
  socialText: {
    color: '#fff',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButton: {
    marginHorizontal: 10,
    color: '#fff',
  },
  signupContainer: {
    //backgroundColor: 'rgba(22, 155, 221, 0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    //transform: [{ translateY: 40 }],
  },
  signupText: {
    color: '#fff',
  },
  signupLink: {
    color: '#4E4FEB',
    fontWeight: 'bold',
  },
});

export default Login;
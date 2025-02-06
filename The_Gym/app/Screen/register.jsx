import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform, ImageBackground} from 'react-native';

const { width, height } = Dimensions.get('window');

const Register = () => {
  // Placeholder for the signIn function to navigate to the login page
  const signIn = () => {
    // Add your sign-in navigation logic here
    console.log("Navigate to Login");
  };

  return (
    <ImageBackground
      source={require('../../assets/images/register.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark Overlay */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subtitle}>Welcome to The Gym, let's achieve your goals!</Text>

        <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#DDD" />
        <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#DDD" />
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#DDD" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account? 
          <TouchableOpacity onPress={signIn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darkens the background slightly
  },
  container: {
    width: '90%',
    padding: width * 0.05,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: height * 0.018,
    borderRadius: 12,
    marginBottom: height * 0.02,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    fontSize: width * 0.045,
    color: '#fff',
  },
  button: {
    backgroundColor: '#4E4FEB',
    paddingVertical: height * 0.02,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginVertical: height * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: height * 0.02,
    fontSize: width * 0.04,
  },
  loginText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default Register;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import for icons

const admin = () => {
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
});

export default admin;

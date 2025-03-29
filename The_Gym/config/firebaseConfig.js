// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAkCa8eo9eeX7Y5unLTEOGSFlXC6NOerg",
  authDomain: "the-gym-836d8.firebaseapp.com",
  projectId: "the-gym-836d8",
  storageBucket: "the-gym-836d8.firebasestorage.app",
  messagingSenderId: "334918585591",
  appId: "1:334918585591:web:befadd7473b1244759d7f2",
  measurementId: "G-DHH2ZJ19V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });const db = getFirestore(app);

export { auth, db };


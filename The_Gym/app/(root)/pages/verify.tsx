import React, { useEffect, useState } from "react";
import { useRouter,useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail
} from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";

const Verify: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const { firstName, lastName, username} = useLocalSearchParams();

  // Continuous verification check
  useEffect(() => {
    const interval = setInterval(() => {
      const user = auth.currentUser;
      if (user) {
        user.reload().then(() => {
          if (user.emailVerified) {
            clearInterval(interval);
            router.push({
              pathname: "/(root)/pages/SignUp",
              params: { firstName,lastName,username,email, password }
            });
          }
        });
      }
    }, 3000); // Check every 3 seconds

    return () => clearInterval(interval);
  }, [email, password, router]);

  // Countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      return methods.length > 0;
    } catch (error) {
      return false;
    }
  };
const continueAnyway =()=>{
  router.push({
    pathname: "/(root)/pages/SignUp",
    params: { firstName,lastName,username,email, password }
  });
}

  const handleVerify = async (): Promise<void> => {
    if (!email || !password) {
      setEmailError("Please enter email and password.");

      return;
    }

    try {
      setIsChecking(true);
      setEmailError("");

      // First check if email exists
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setEmailError("Email already exists. Please use a different email.");
        return;
      }

      // Create user (will be automatically signed in)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Send verification email
      await sendEmailVerification(user);
      
      setTimeLeft(120); // 2-minute countdown
      setAttempts(prev => prev + 1);
      
      
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailError("Email already exists. Please use a different email.");
      } else {
        setEmailError("Please try again shortly.");
      }
    } finally {
      setIsChecking(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-900 px-6">
      <Text className="text-white text-2xl font-bold mb-4">Verify Your Email</Text>

      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#CCC"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError("");
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        className={`w-full bg-white/20 text-white p-4 rounded-lg mb-1 border ${
          emailError ? "border-red-500" : "border-white/50"
        }`}
      />
      {emailError && (
        <Text className="text-red-500 w-full mb-3">{emailError}</Text>
      )}

      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="#CCC"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full bg-white/20 text-white p-4 rounded-lg mb-4 border border-white/50"
      />

      <TouchableOpacity
        onPress={handleVerify}
        disabled={timeLeft > 0 || attempts >= 3 || isChecking || !!emailError}
        className={`w-full py-3 rounded-lg mb-4 ${
          timeLeft > 0 || attempts >= 3 || isChecking || !!emailError
            ? "bg-gray-600" 
            : "bg-green-500"
        }`}
      >
        <Text className="text-white font-bold text-center">
          {isChecking ? "Sending..." : 
           attempts === 0 ? "Send Verification" : "Resend Verification"}
        </Text>
      </TouchableOpacity>

      {attempts > 0 && (
        <View className="w-full items-center">
          {timeLeft > 0 ? (
            <Text className="text-gray-400 mb-4">
              Resend available in {formatTime(timeLeft)}
            </Text>
          ) : (
            <TouchableOpacity 
              onPress={continueAnyway}
              className="border border-gray-400 px-6 py-2 rounded-lg"
            >
              <Text className="text-white">Continue Anyway</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {attempts >= 3 && (
        <Text className="text-gray-400 mt-4">
          Maximum verification attempts reached
        </Text>
      )}
    </View>
  );
};

export default Verify;
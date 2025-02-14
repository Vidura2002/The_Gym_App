import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function ChatScreen() {
  return (
    <SafeAreaView className="flex-1 p-2 bg-white">
      {/* Header */}
      <View className="flex flex-row px-1 items-center gap-4 bg-gray-100 p-2 rounded-md shadow-md">
        <AntDesign name="left" size={24} color="black" />
        <Image className="size-12 rounded-full" source={require("../../../assets/images/member.jpg")} />
        <Text className="font-bold text-2xl">You</Text>
      </View>

      {/* Middle Input Bar */}
      <View className="flex-1 justify-end mb-20  items-center">
        <View className="flex flex-row gap-2 items-center border rounded-full px-4 py-2 w-4/5">
          <TextInput className="flex-1 px-2" placeholder="Message" />
          <TouchableOpacity>
            <FontAwesome name="send" size={24} color="black" />
          </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  );
}

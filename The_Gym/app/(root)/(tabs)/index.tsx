import { Link } from "expo-router";
import { SafeAreaView, Text, View ,ScrollView,Image} from "react-native";
import shedule from "./shedule";
import Currentmembers from "@/app/component/Currentmembers";
import Currentcouches from "@/app/component/Currentcouches";

export default function Index() {
  return (
    <SafeAreaView className=" h-full">
      <ScrollView className="px-2">
        <View className="flex flex-row item-center mt-5 justify-between">
          <Image source={require("../../../assets/images/react-logo.png")} className="size-16 rounded-full flex " ></Image>
          <View>
            <Text className="text-center font-extrabold text-4xl">The GYM</Text>
          </View>
          <Image source={require("../../../assets/images/react-logo.png")} className="size-16 rounded-full flex " ></Image>
        </View>


        <View className="flex flex-row px-2 mt-6 gap-2">
          <View className="bg-gray-600 p-5 rounded-md shadow-full">
            <Text className="text-white text-2xl font-bold">Current members</Text>
            <Text className="text-white text-3xl font-bold text-center">37</Text>
          </View>

          <View className="bg-gray-600 p-5 rounded-md shadow-full">
            <Text className="text-white text-2xl font-bold">Sheduled</Text>
            <Text className="text-white text-3xl font-bold text-center">13</Text>
          </View>
        </View>

        <View className="flex flex-row mt-8 justify-between ">
            <View className="border p-2 ">
              <Text className="text-center mb-2 font-bold">Current members</Text>
              <Currentmembers name="Vidura Kahandawa" time="8.20"/>
            </View>

            <View className="border p-2">
              <Text className="text-center mb-2 font-bold">Current couches</Text>
              <Currentcouches name="Krishmal ..."/>
            </View>
        </View>
        
      </ScrollView>
      

    </SafeAreaView>
  );
}

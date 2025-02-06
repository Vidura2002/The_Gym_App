import { Link } from "expo-router";
import { SafeAreaView, Text, View ,ScrollView,Image, FlatList, TouchableOpacity} from "react-native";
import Currentmembers from "@/app/component/Currentmembers";
import Currentcouches from "@/app/component/Currentcouches";

const membersData = [
  { id: '1', name: "Vidura Kahandawa", time: "18.20" },
  { id: '2', name: "John Doe", time: "19.00" },
  { id: '3', name: "Jane Smith", time: "17.30" },
  { id: '4', name: "Michael Brown", time: "20.15" },
  { id: '5', name: "Emily Davis", time: "16.45" },
  { id: '6', name: "Chris Wilson", time: "21.00" },
  { id: '7', name: "Sarah Lee", time: "15.30" }
];

const CouchhData = [
  { id: '1', fname: "Vidura",lname:"Kahandawa", time: "18.20" },
  { id: '2', fname: "John",lname:"Doe", time: "19.00" },
  { id: '3', fname: "Jane",lname:"Smith", time: "17.30" },
  { id: '4', fname: "Michael",lname:"Brown", time: "20.15" },
  { id: '5', fname: "Emily",lname:"Davis", time: "16.45" },
  { id: '6', fname: "Chris",lname:"Wilson", time: "21.00" },
  { id: '7', fname: "Sarah",lname:"Lee", time: "15.30" }
];


export default function Index() {
  return (
    <SafeAreaView className=" h-full">
      <ScrollView className="px-2" showsVerticalScrollIndicator={false} contentContainerClassName='pb-2'>
        <View className="flex flex-row items-center py-2 justify-between bg-white">
          <Image source={require("../../../assets/images/logo.webp")} className="size-16 rounded-full flex " ></Image>
          <View>
            <Text className="text-center font-extrabold text-4xl">The GYM</Text>
          </View>
          <Image source={require("../../../assets/images/AR.jpg")} className="size-16 rounded-full flex " ></Image>
        </View>


        <View className="flex flex-row px-2 mt-6 justify-between">
          <View className="bg-gray-600 p-5 rounded-md shadow-full">
            <Text className="text-white text-2xl font-bold">Current members</Text>
            <Text className="text-white text-3xl font-bold text-center">37</Text>
          </View>

          <View className="bg-gray-600 p-5 rounded-md shadow-full">
            <Text className="text-white text-2xl font-bold">Sheduled</Text>
            <Text className="text-white text-3xl font-bold text-center">13</Text>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-2xl font-bold mb-2">Available Coaches :</Text>
          <ScrollView horizontal 
          showsHorizontalScrollIndicator={false}
          className="">
            {CouchhData.map((item,index)=>(
              <Currentcouches name={item.fname}/>
            ))}
          </ScrollView>
        </View>
        

        <View className="flex mt-8 gap-3  border py-2 rounded-md h-96 ">
            <Text className="text-center text-2xl mb-2 font-bold">Current members</Text>
            <FlatList 
              data={membersData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={true}
              contentContainerStyle={{ gap: 2, paddingHorizontal: 10 }}
              renderItem={({ item }) => <Currentmembers name={item.name} time={item.time} />}
            />
        </View>

        <View className="flex flex-row border items-center justify-center justify-between  rounded-full mt-5 px-2 py-2">
          <Text className="font-extrabold text-3xl">Ready to</Text>
          <TouchableOpacity className="bg-green-500 p-2 rounded-full ">
            <View className=" px-5 py-1 rounded-full ">
              <Text className="text-white font-bold text-2xl ">Go</Text>
            </View>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
      

    </SafeAreaView>
  );
}
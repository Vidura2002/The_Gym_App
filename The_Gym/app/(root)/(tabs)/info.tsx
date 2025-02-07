import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const members = [
  {name:"Vidura Kahandawa",label:"Coach"},
  {name:"Krishmal Gamage",label:"Coach"},
  {name:"Heshan Nirmitha",label:"Coach"},
  {name:"Eshan Deepthika",label:"Coach"},
  {name:"Januda Virusara",label:"Coach"},
  {name:"Vidura Kahandawa",label:"member"},
  {name:"Vidura Kahandawa",label:"member"},
  {name:"Vidura Kahandawa",label:"member"},
  {name:"Vidura Kahandawa",label:"member"},
  {name:"Vidura Kahandawa",label:"member"},
  {name:"Vidura Kahandawa",label:"member"},

]
const info = () => {

  const [search,setSearch] = useState("");

  const handleSearch = ()  =>{

  }
  return (
    <SafeAreaView className='p-2 bg-white'>
      <ScrollView>
      <View className='flex flex-row items-center gap-4 justify-center border-b pb-12'>
          <TouchableOpacity onPress={()=>{router.back()}} className='absolute left-2 top-2'>
              <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
                
          <Text className='text-3xl font-bold mt-2'>The GYM</Text>
      </View>

      <View className='flex flex-row items-center justify-between mx-8 px-4 rounded-lg bg-accent-100 border border-primary-100 mt-4 py-2 '>
        <View className='flex flex-1 flex-row items-center justify-start z-50'>
          <Feather name="search" size={24} color="black" />
          <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder='Search for anything'
          className='text-sm font-rubik text-black-300 ml-2 flex-1 w-full'
          />
        </View>

      </View>

      <View className='mt-5'> 
        <Text className='text-2xl font-bold'>Members</Text>
      </View>

      <View className='mt-5'>

        {members.map((item,index)=>(
          <View className=' flex flex-row items-center justify-between border-b mb-1 p-2 rounded-md '>
            <View className='flex flex-row gap-2 items-center'>
              <Image className='size-12 rounded-full' source={require("../../../assets/images/member.jpg") } />
              <Text>{item.name}</Text>
            </View>
            <View className='flex flex-row items-center gap-4'>
              { item.label==="Coach" && <Text className='bg-green-400 p-1 rounded text-sm text-white font-bold'>{item.label}</Text>}
              <TouchableOpacity>
                <Feather name="more-vertical" size={24} color="black" />
              </TouchableOpacity>
              
            </View>
          </View>
        ))}

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default info
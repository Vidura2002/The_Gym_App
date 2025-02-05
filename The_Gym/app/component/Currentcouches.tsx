import { View, Text,Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Currentcouches = ({name}:{name:String}) => {
  return (
    <View className=' flex flex-row justify-between px-1 gap-3'>
      <View className='flex flex-row items-center'>
        <Image className='size-6' source={require("../../assets/icons/person.png") }></Image>
        <Text className='text-sm'>{name}</Text>
      </View>

      <View>
        <Feather name="info" size={24} color="black" />
      </View>
    </View>
  )
}

export default Currentcouches
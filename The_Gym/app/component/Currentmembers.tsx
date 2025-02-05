import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Currentmembers = ({name,time}:{name:String,time:String}) => {
  return (
    <View className='flex flex-row justify-between px-1 items-center gap-4'>
      <View className='flex flex-row items-center'>
        <Image className='size-6' source={require("../../assets/icons/person.png") }></Image>
        <Text className='text-sm'>{name}</Text>
      </View>

      <View className='flex flex-row gap-2'>
        <Text className='text-sm'>{time}</Text>
        <Feather name="more-vertical" size={15} color="black" />
      </View>
    </View>
  )
}

export default Currentmembers
import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Currentcouches = ({name}:{name:String}) => {
  return (
    <TouchableOpacity className='mr-2'>
        <View className=' flex flex-row justify-between border px-7 gap-3 shadow-full py-2 mt-1 rounded-md'>
            <View className='flex flex-row items-center gap-2'>
                <Image className='size-8 rounded-full' source={require("../../assets/images/coach.jpg") }></Image>
                <Text className='text-sm'>{name}</Text>
            </View>
        </View>
    </TouchableOpacity>
    
  )
}

export default Currentcouches
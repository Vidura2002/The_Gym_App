import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Currentmembers = ({name,time}:{name:String,time:String}) => {
  return (
    <TouchableOpacity>
        <View className='flex flex-row px-1 justify-between items-center   gap-2 border p-1 mt-1 rounded-md'>
            <View className='flex flex-row gap-2 items-center'>
                <Image className='size-12 rounded-full' source={require("../../assets/images/member.jpg") }></Image>
                <Text className='text-md '>{name}</Text>
            </View>

            <View className='flex'>
                <Text className='text-md mr-2 '>{time}</Text>
            </View>
        </View>
    </TouchableOpacity>
    
  )
}

export default Currentmembers
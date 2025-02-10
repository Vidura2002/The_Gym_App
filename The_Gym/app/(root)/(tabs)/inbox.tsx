import { View, Text, SafeAreaView ,Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const inbox = () => {
  return (
    <SafeAreaView className='p-2'>
        <View className='flex flex-row px-1 items-center gap-4'>
            <AntDesign name="left" size={24} color="black" />
            <Image className='size-12 rounded-full' source={require("../../../assets/images/member.jpg")}/>
            <Text className='font-bold text-2xl'>You</Text>
        </View>
    </SafeAreaView>
  )
}

export default inbox
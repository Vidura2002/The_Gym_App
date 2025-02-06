import { View, Text, SafeAreaView, TouchableOpacity, ViewBase } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Octicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const workout =[
    {id:1},
    {id:2},
    {id:3} 
];

const days =[
    {id:1,name:"first Day"},
    {id:2,name:"second Day"},
    {id:3,name:"third Day"},
]

const option =[
    {name:"Bench press",set1:10,set2:10,set3:8},
    {name:"Bench press",set1:10,set2:10,set3:8},
    {name:"Bench press",set1:10,set2:10,set3:8},
    {name:"Bench press",set1:10,set2:10,set3:8},
]

const Schedule = () => {

    const [selectedWorkout, setSelectedWorkout] = useState<number | null>(1);
    const [selecteday, setSelecteday] = useState<number | null>(1);

  return (
    <SafeAreaView className='p-2 bg-white h-full'>
        <View className='flex flex-row px-1 justify-between items-center'>
            <View className='flex flex-row items-center gap-2'>
                <TouchableOpacity onPress={()=>{router.back()}}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                
                <Text className='text-2xl font-bold'>Work Out Schedule</Text>
            </View>
            
            <TouchableOpacity className='bg-blue-200 p-2 rounded-md'>
                <Text className='font-medium'>Edit schedule</Text>
            </TouchableOpacity>
        </View>

        <View className='flex flex-row px-1 items-center gap-3 mt-8'>
            <View >
                <Text className='text-lg font-bold'>Today workout</Text>
            </View>
            <View className='flex flex-row px-1'>
                {workout.map((item,index)=>(
                    <TouchableOpacity className={`border mr-1 rounded-md  p-2 ${selectedWorkout===item.id ? "bg-blue-200" : " "} `}
                    key={index}
                    onPress={()=>setSelectedWorkout(item.id)}
                    >
                        <Text>{item.id}st set</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

        <View className='flex flex-row justify-between mt-8 border-b mb-2'>
            <View className='flex flex-row gap-2'>
                {days.map((item,index)=>(
                    <TouchableOpacity className={`${selecteday===item.id ? "border-l border-t border-r rounded bg-gray-300 font-extrabold" : " "} p-1 `}
                    onPress={()=>setSelecteday(item.id)}
                    >
                        <Text key={index}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                <AntDesign name="arrowsalt" size={24} color="black" />
            </View> 
        </View>

        <View>
            {option.map((item,index)=>(
                <View className='flex flex-row px-1 gap-4 justify-between border-b py-2'>
                    <Text className='text-xl text-blue-700 font-medium'>{item.name}</Text>
                    <Text className='text-xl text-blue-700 font-medium'>{item.set1} | {item.set2} | {item.set3}</Text>
                    <Octicons name="video" size={24} color="black" />
                </View>
            ))}
        </View>

    </SafeAreaView>
  )
}

export default Schedule
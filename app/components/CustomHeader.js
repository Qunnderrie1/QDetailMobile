import { Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import profilepic from '../Images/que.jpg'


const CustomHeader = () => {


    return (
        <View className=' bg-primary-color pt-8  flex items-center justify-between  w-full h-fit px-4 '>

            <View className=' pt-8  flex flex-row items-center justify-between  w-full h-[150px]  '>
                <View className='flex flex-row gap-2 items-center'>
                    <View className='   h-[40px] w-[40px] rounded-full bg-white'>
                        <Image source={profilepic} className='w-[40px] h-[40px] rounded-full border-2 border-solid border-primaryColor' />
                    </View>
                    <View>
                        <Text className=' text-[22px] text-white font-extralight '>Hello, <Text className='font-bold text-white'>Que!</Text></Text>
                        <View className='flex flex-row-reverse gap-1  items-center justify-end'>
                            <Text className='font-light text-white'>Atlanta, GA</Text>
                            <Ionicons name="location" color="white" />
                        </View>
                    </View>
                </View>

                <View className='flex flex-row gap-4 item' >

                    <View className=' bg-[#ffffff] w-[32px] h-[32px] rounded-full relative flex items-center justify-center'>
                        <View className='relative'>
                            <Ionicons name="notifications-outline" size={24} color="black" />
                            <View className=' bg-red-600 w-[12px] h-[12px] rounded-full flex justify-center items-center absolute top-0 right-0'>
                                <Text className='text-white text-[16px]'></Text>
                            </View>
                        </View>

                    </View>

                </View>
            </View>



            <View className='w-full pb-4'>
                <TextInput className='bg-white h-[40px] rounded-md pl-2 text-[20px]' placeholder='Search'></TextInput>
            </View>

        </View>
    )
}

export default CustomHeader


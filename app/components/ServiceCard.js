import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';





const Servicecard = ({ title, subTitle, price, image, handleService, duration, item }) => {


    const router = useRouter();

    return (
        <View className='bg-white  mx-2 w-[250px] h-fit rounded-lg flex flex-row  items-center justify-between shadow-sm'>
            <View className='flex w-full  '>
                <View className='w-full'>
                    <Image resizeMethod='resize' source={image} className='  max-w-full h-[150px]  rounded-tl-lg rounded-tr-lg' />
                </View>
                <View className='flex p-4 gap-1   '>
                    <View className='flex flex-row justify-between items-center'>
                        <Text className='text-[18px] justify-end font-semibold'>{title}</Text>
                        <Text className='text-black'>{price}</Text>
                    </View>
                    <View className='flex flex-row items-center gap-1 '>
                        <Ionicons name='time-outline' color="gray" size={18} />
                        <Text>{duration}</Text>
                    </View>
                </View>
                <View className=' pt-4 '>
                    <Pressable onPress={() => router.push(`/servicedetail/${item}`)} className='bg-primary-color  py-2  flex justify-center items-center'>
                        <Text className='text-white font-semibold text-[18px]'>Book</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Servicecard


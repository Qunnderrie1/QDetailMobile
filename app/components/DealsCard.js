import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import car from '../Images/carclean.jpg'

const DealsCard = ({ title, subTitle }) => {
    return (
        <View className='flex justify-start mt-2 flex-row gap-4 px-2 '>
            <View className='bg-black w-[350px] h-[150px] mt-2 rounded-[20px] flex  justify-between  relative'>
                <Image source={car} className='w-full h-full absolute rounded-[20px] opacity-20 z-0 object-contain' resizeMode='cover' />
                <View className=' flex gap-8 px-4 py-4 '>
                    <View>
                        <Text className='text-white text-[32px] font-semibold'>{title} </Text>
                        <Text className='text-white text-[30px] '>{subTitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DealsCard


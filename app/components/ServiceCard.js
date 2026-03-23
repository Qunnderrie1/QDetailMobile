import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'






const Servicecard = ({ title, subTitle, price, image, handleService }) => {

    return (
        <View className='bg-white  mx-2 w-[250px] h-fit rounded-lg flex flex-row  items-center justify-between shadow-sm'>
            <View className='flex w-full  '>
                <View className='w-full'>
                    <Image resizeMethod='resize' source={image} className='  max-w-full h-[150px]  rounded-tl-lg rounded-tr-lg' />
                </View>
                <View className='flex p-4   '>
                    <View>
                        <Text className='text-[18px] justify-end font-semibold'>{title}</Text>
                    </View>
                    <View className='flex flex-row items-center gap-2 '>
                        <Text className='text-gray-500'>{subTitle}</Text>
                        <Text className='text-gray-500'>| </Text>
                        <Text className='text-gray-500'>{price}</Text>
                    </View>

                </View>
                <View className=' pt-4 '>
                    <TouchableOpacity onPress={handleService} className='bg-primary-color  py-2  flex justify-center items-center'>
                        <Text className='text-white font-semibold text-[18px]'>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Servicecard


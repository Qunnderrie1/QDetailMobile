import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const profile = () => {


    const navigation = useNavigation()

    const handleLogout = () => {
        navigation.navigate("index")
    }


    return (
        <View className='flex-1 justify-center  items-center gap-10'>
            <Text>Profile Page</Text>
            <TouchableOpacity className='flex justify-center items-center bg-red-500 rounded-md py-4' onPress={handleLogout}>
                <Text className='text-white  w-[150px] h-6 text-center text-[20px]'>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default profile


import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image, safe } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import profilePic from '../Images/que.jpg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';


const profile = () => {


    const navigation = useNavigation()

    // User Upload Profile Photo Method
    const handleImageLibraryLaunch = () => {
        launchImageLibrary({ mediaTypes: 'photo' }, (res) => {
            if (res.assets) {
                console.log(res.assets[0].uri)
            }
        })
    }

    // Logout User Account Method
    const handleUploadProfilePhoto = () => {
        handleImageLibraryLaunch()

    }


    // Logout User Account Method
    const handleLogout = () => {
        navigation.navigate("index")
    }


    // Delete User Account Method
    const handleAccount = () => {
        navigation.navigate("index")
    }


    return (
        <SafeAreaView className='flex-1  gap-10'>
            <View className=' h-[300px] flex justify-center items-center'>
                <View className='flex gap-8 justify-center items-center'>
                    <View className='relative'>
                        <Image className='w-[150px] h-[150px]  rounded-full border-2 border-solid ' source={profilePic} />
                        <Pressable onPress={handleUploadProfilePhoto} className='bg-blue-500 rounded-full w-[36px] h-[36px] flex justify-center absolute bottom-0 right-2 items-center '>
                            <Ionicons name="camera" size={22} color="white" />
                        </Pressable>
                    </View>
                    <View className='flex justify-center items-center'>
                        <Text className=' text-[24px] font-medium '>Que Snelling</Text>
                        <Text className='text-gray-500'>JohnSmith@gmail.com</Text>
                    </View>

                </View>
            </View>

            <View>

            </View>


            <View className='flex flex-row gap-8 justify-center'>
                <Pressable className='flex justify-center items-center border-2 border-red-500 rounded-md py-4' onPress={handleLogout}>
                    <Text className='text-red-500  w-[150px] h-6 text-center text-[20px]'>Logout</Text>
                </Pressable>
                <Pressable className='flex justify-center items-center bg-red-500 rounded-md py-4' onPress={handleAccount}>
                    <Text className='text-white  w-[150px] h-6 text-center text-[20px]'>Delet Account</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default profile


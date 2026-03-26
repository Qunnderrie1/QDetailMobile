import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import profilePic from '../Images/que.jpg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const profile = () => {


    const router = useRouter()

    const [image, setImage] = useState(null)
    const [user, setUser] = useState({ auth })

    // User Upload Profile Photo Method
    const pickImage = async () => {
        // ask for permission
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();


        if (!permissionResult.granted) {
            alert("Permission to access gallery is required!")
            return;
        }


        // Open image picker
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaType,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        })

        // If user didn't cancel
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }

    }

    // Logout User Account Method
    const handleUploadProfilePhoto = () => {
        pickImage()

    }


    // Logout User Account Method
    const handleLogout = async () => {

        try {
            await signOut(auth)
            user(null)
            router.push("index")

        } catch (error) {
            Alert.alert("Logout Failed", error.message)

        }
    }


    // Delete User Account Method
    const handleAccount = () => {

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


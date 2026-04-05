import { Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { Ionicons } from "@expo/vector-icons";
import profilepic from '../Images/que.jpg'
import { db}  from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import * as Location from 'expo-location'



const CustomHeader = () => {
 
    const [user ,setUser] = useState(null)

       const [location , setLocation ] = useState(null)
    
    
            const getLocation =  async () => {
        
                const { status } = await Location.requestForegroundPermissionsAsync()
        
                if(status !== "granted"){
                    Alert.alert("Location Error" , "Permission Denied!")
                }

                const loc = await  Location.getCurrentPositionAsync({})

                let address = await Location.reverseGeocodeAsync({

                latitude: loc.coords.latitude,
                 longitude: loc.coords.longitude,
                });
                setLocation(address)
            }
    
    
    // Fetching user data from database
     const fetchUser = async () => {

        const auth = getAuth();
        const activeUser = auth.currentUser

        if(!activeUser) return;

        const docRef  = doc(db , "users" , activeUser.uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            setUser(docSnap.data())
  
        }
            
        }

     useEffect(() => {
         fetchUser()
         getLocation()
     }, [])
 



    return (
        <View className=' bg-primary-color pt-8  flex items-center justify-between  w-full h-fit px-4 '>

            <View className=' pt-8  flex flex-row items-center justify-between  w-full h-[150px]  '>
                <View className='flex flex-row gap-2 items-center'>
                    <View className='h-[40px] w-[40px] flex justify-center items-center rounded-full bg-gray-200'>
                        <Text className='text-[16px] font-semibold'>{user ? user.username[0] : "G"}</Text>
                    </View>
                    <View>
                        <Text className=' text-[22px] text-white font-extralight '>Hello, <Text className='font-bold text-white'>{user ? user.username : "Guest"}!</Text></Text>
                        <View className='flex flex-row-reverse gap-1  items-center justify-end'>
                            <Pressable className='flex  flex-row gap-1' onPress={getLocation}>
                            <Text className='font-light text-white'>{location ? location.map(item => item.city) : "Unknow Location"}</Text>
                            <Text className='font-light text-white'>{location ? location.map(item => item.region) : "Unknow Location"}</Text>
                            </Pressable>
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


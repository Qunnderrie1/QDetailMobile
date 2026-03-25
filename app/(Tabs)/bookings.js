import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";

const bookings = () => {


    const handleBooking = () => {
        console.log("You tap the booking button!")
    }

    return (
        <SafeAreaView className='flex-1 justify-center  items-center w-full gap-4'>
            <Ionicons name="calendar-outline" size={60} color="lightgray" />
            <Text>No Appointments Scheduled</Text>
            <Pressable onPress={handleBooking} className='bg-primary-color px-[24px] py-2 rounded-e-md'>
                <Text className='text-white'>Book Now</Text>
            </Pressable>
        </SafeAreaView>


    )
}

export default bookings


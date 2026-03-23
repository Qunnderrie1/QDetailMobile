import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import services from '../serviceData';
const servicedetail = () => {


    const { id } = useLocalSearchParams();


    const serviceItems = services.find(item => item.id == id)

    if (!serviceItems) {
        return (

            <View className='flex flex-1 items-center justify-center'>
                <Text>Page Not Found!</Text>
            </View>
        )
    }

    return (

        <View className='flex flex-1 items-center justify-center'>
            <Text>You Choose: {serviceItems.title}</Text>
            <Text>You Choose: {serviceItems.id}</Text>
        </View>
    )
}




export default servicedetail


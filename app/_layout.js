import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import '../global.css'
import { useContext } from 'react'



const RootLayout = () => {

    return (

        <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name='index'  /> 
          <Stack.Screen name='(tabs)' />
        </Stack>
    )
}

export default RootLayout


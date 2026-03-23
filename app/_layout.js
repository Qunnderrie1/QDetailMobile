import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import '../global.css'


const RootLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' options={{ title: "Login", headerShown: false }} />
            <Stack.Screen name='signup' options={{ title: "signup", headerShown: false }} />
            <Stack.Screen name='vehicletype' options={{ title: "Vehicle ", headerShown: true, headerBackTitle: "Home" }} />
            <Stack.Screen name='servicedetail/[id]' options={{ title: "Service ", headerShown: true, headerBackTitle: "Home" }} />


        </Stack>
    )
}

export default RootLayout


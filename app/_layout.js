import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import '../global.css'


const RootLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' options={{ title: "Login", headerShown: false }} />
            <Stack.Screen name='signup' options={{ title: "signup", headerShown: false }} />
            <Stack.Screen name='vehicletype' options={{ title: "Choose Vehicle Type", headerShown: true, headerBackTitle: "Home", headerStyle: { backgroundColor: "skyblue" } }} />

        </Stack>
    )
}

export default RootLayout


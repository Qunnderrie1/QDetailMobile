
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from '../components/CustomHeader';


const TabLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false, headerBackButtonDisplayMode: false }}>
            <Tabs.Screen name="home" options={{
                title: "Home", headerShown: true, header: (props) => <CustomHeader {...props} />, tabBarIcon: ({ size, color }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile", headerShown: false, headerBackButtonDisplayMode: false, tabBarIcon: ({ size, color }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="services" options={{
                title: "Services", headerShown: true, headerStyle: { backgroundColor: "skyblue" }, headerBackButtonDisplayMode: true, tabBarIcon: ({ size, color }) => (
                    <Ionicons name="car-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="bookings" options={{
                title: "Booking", headerShown: false, headerBackButtonDisplayMode: false, tabBarIcon: ({ size, color }) => (
                    <Ionicons name="calendar-outline" size={size} color={color} />
                ),
            }} />

        </Tabs>
    )
}

export default TabLayout


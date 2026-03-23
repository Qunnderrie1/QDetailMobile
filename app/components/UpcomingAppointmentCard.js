import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const UpcomingAppointmentCard = () => {
    return (
        <View className="mx-1 mt-5 rounded-md bg-white p-5 shadow-sm">
            {/* Top Row */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className=" text-xl font-extrabold text-zinc-900">
                    Full Interior & Exterior Detail
                </Text>
                <View className="rounded-full bg-[#e1e0fc] px-3 py-1">
                    <Text className="text-xs font-semibold text-primary-color">
                        Confirmed
                    </Text>
                </View>

            </View>

            {/* Service Title */}


            {/* Details */}
            <View className="gap-y-3">
                <View className="flex-row items-center">
                    <MaterialIcons name="calendar-today" size={18} color="#271DDB" />
                    <Text className="ml-3 text-sm text-zinc-600">March 28, 2026</Text>
                </View>

                <View className="flex-row items-center">
                    <MaterialIcons name="access-time" size={18} color="#271DDB" />
                    <Text className="ml-3 text-sm text-zinc-600">10:30 AM</Text>
                </View>

                <View className="flex-row items-center">
                    <FontAwesome5 name="map-marker-alt" size={16} color="#271DDB" />
                    <Text className="ml-3 flex-1 text-sm text-zinc-600">
                        123 Main Street, Columbus, GA
                    </Text>
                </View>

                <View className="flex-row items-center">
                    <FontAwesome5 name="car-side" size={16} color="#271DDB" />
                    <Text className="ml-3 text-sm text-zinc-600">2021 Dodge Charger</Text>
                </View>
            </View>

            {/* Buttons */}
            <View className="mt-5 flex-row gap-x-3">
                <TouchableOpacity className="flex-1 items-center rounded-2xl bg-primary-color py-3.5">
                    <Text className="font-semibold text-white">View Details</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-1 items-center rounded-2xl bg-zinc-100 py-3.5">
                    <Text className="font-semibold text-zinc-900">Reschedule</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UpcomingAppointmentCard

const styles = StyleSheet.create({})
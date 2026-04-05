import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const UpcomingAppointmentCard = ({service , time , city, state, vehicle , address , status, date }) => {
    return (
        <View className="mx-3 mt-1 w-[300px] rounded-md bg-white p-5 shadow-sm">
            {/* Top Row */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className=" text-xl font-extrabold text-zinc-900">{service}</Text>
                <View className="rounded-full bg-[#e1e0fc] px-3 py-1">
                    <Text className="text-xs font-semibold text-primary-color">
                        {status}
                    </Text>
                </View>

            </View>

            {/* Service Title */}


            {/* Details */}
            <View className="gap-y-3">
                <View className="flex-row items-center">
                    <MaterialIcons name="calendar-today" size={18} color="#271DDB" />
                    <Text className="ml-3 text-sm text-zinc-600">{date}</Text>
                </View>

                <View className="flex-row items-center">
                    <MaterialIcons name="access-time" size={18} color="#271DDB" />
                    <Text className="ml-3 text-sm text-zinc-600">{time}</Text>
                </View>

                <View className="flex-row items-center">
                    <FontAwesome5 name="map-marker-alt" size={16} color="#271DDB" />
                    <Text className="ml-3 flex-1 text-sm text-zinc-600">
                        {address}
                    </Text>
                </View>

                <View className="flex-row items-center">
                    <FontAwesome5 name="car-side" size={16} color="#271DDB" />
                    <Text className="ml-3 text-sm text-zinc-600">{vehicle}</Text>
                </View>
            </View>

            {/* Buttons */}
            <View className="mt-5 flex-row gap-x-3">
                <Pressable className="flex-1 items-center rounded-2xl bg-primary-color py-3.5">
                    <Text className="font-semibold text-white">View Details</Text>
                </Pressable>

                <Pressable className="flex-1 items-center rounded-2xl bg-zinc-100 py-3.5">
                    <Text className="font-semibold text-zinc-900">Reschedule</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default UpcomingAppointmentCard

const styles = StyleSheet.create({})
import { Text, TouchableOpacity, View, ScrollView, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import Divider from '../components/Divider';
import car from '../Images/carclean.jpg'
import fulldetail from '../Images/fulldetail.png'
import clean from '../Images/clean.png'
import seat from '../Images/seatshampoo.png'
import sofa from '../Images/sofa.png'
import logo from '../Images/logo.png'
import { useRouter } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { fa } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import servicesData from '../serviceData'
import ServiceCard from '../components/ServiceCard';


const Home = () => {

    const router = useRouter();


    const handleService = () => {

        router.push("vehicletype")
    }





    return (
        <View className='flex-1 bg-gray-100'>

            <ScrollView>
                <View className=''>
                    {/* Promotions Section */}
                    <ScrollView horizontal className='px-4 pb-4' >
                        <View className='flex justify-start mt-10 flex-row gap-4  '>

                            <View className='bg-black w-[350px] h-[200px] mt-2 rounded-lg flex  justify-between  relative'>
                                <Image source={car} className='w-full h-full absolute rounded-md opacity-50 z-0 object-contain' resizeMode='cover' />
                                <View className=' flex gap-8 px-4 py-4 '>
                                    <View>
                                        <Text className='text-white text-[20px] font-semibold'>Book Full Interior Detail </Text>
                                        <Text className='text-white text-[20px] font-semibold'>And Get 10% Off</Text>
                                        <Text className='text-white mt-4'>Package: Full Interior Detail</Text>
                                    </View>
                                    <View className='justify-end pb-2'>
                                        <TouchableOpacity className='bg-primary-color h-[40px] w-[100px] flex justify-center items-center rounded-lg'>
                                            <Text className='text-white'>Book Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>






                    {/* Services Section */}
                    <View className='flex justify-start mt-2 px-4 py-4 gap-4 '>
                        <View>
                            <Text className='text-black text-[18px] text-left font-semibold'>Category</Text>
                        </View>

                        <View className='flex flex-row gap-10'>

                            <View className='flex justify-center items-center'>
                                <View className='bg-gray-200 rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                                    <Image source={clean} className='w-[28px] h-[28px]' />
                                </View>
                                <Text>Wash</Text>
                            </View>


                            <View className='flex justify-center items-center'>
                                <View className='bg-gray-200 rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                                    <Image source={seat} className='w-[28px] h-[28px]' />
                                </View>
                                <Text>Interior </Text>
                            </View>


                            <View className='flex justify-center items-center'>
                                <View className='bg-gray-200 rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                                    <Image source={fulldetail} className='w-[28px] h-[28px]' />
                                </View>
                                <Text>Exterior</Text>
                            </View>

                            <View className='flex justify-center items-center'>
                                <View className='bg-gray-200 rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                                    <Image source={sofa} className='w-[28px] h-[28px]' />
                                </View>
                                <Text>Funiture</Text>
                            </View>



                        </View>


                    </View>





                    {/* Quick Actions Section */}
                    <View className='flex justify-start mt-2  px-4 py-4 '>
                        <View>
                            <Text className='text-black text-[18px] text-left font-semibold'>Our Popluar Services</Text>
                        </View>


                        {/* Service Section */}
                        <View className='py-4'>
                            <FlatList
                                data={servicesData}
                                scrollEnabled
                                horizontal
                                className='py-4'
                                renderItem={({ item }) =>
                                    <ServiceCard title={item.title} subTitle={item.subTtile} price={item.price} image={item.image}
                                    />}
                                keyExtractor={item => item.id}

                            />
                        </View>



                    </View>
                </View>

                {/* Popluar Section */}
                <View className='flex justify-start mt-2 px-4 py-4 gap-4 '>
                    <View>
                        <Text className='text-black text-[18px] text-left font-semibold'>Upcoming Appointment</Text>
                    </View>

                    <View className='bg-white gap-2 w-full h-fit rounded-lg flex flex-row  items-center justify-between shadow-sm'>
                        <View className='flex  gap-4'>
                            <View className='w-full'>
                                <Image resizeMethod='resize' source={car} className='  max-w-full h-[150px]  rounded-tl-lg rounded-tr-lg' />
                            </View>
                            <View className='flex p-4'>
                                <View>
                                    <Text className='text-[18px] justify-end font-semibold'>Car Wash</Text>
                                </View>
                                <View className='flex flex-row items-center gap-2 '>
                                    <Text className='text-gray-500'>Exterior Cleaning</Text>
                                    <Text className='text-gray-500'>| </Text>
                                    <Text className='text-gray-500'>$45</Text>
                                </View>
                                <View className=' pt-4'>
                                    <TouchableOpacity className='bg-sky-400 py-2  flex justify-center items-center'>
                                        <Text className='text-white font-semibold text-[18px]'>Book</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>



            </ScrollView >

        </View >
    )
}

export default Home


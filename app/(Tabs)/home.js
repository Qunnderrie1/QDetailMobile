import { Text, TouchableOpacity, View, ScrollView, Image, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Divider from '../components/Divider';
import car from '../Images/carclean.jpg'
import fulldetail from '../Images/fulldetail.png'
import clean from '../Images/clean.png'
import seat from '../Images/seatshampoo.png'
import sofa from '../Images/sofa.png'
import logo from '../Images/logo.png'
import { useRouter } from 'expo-router';
import servicesData from '../serviceData'
import ServiceCard from '../components/ServiceCard';
import DealsCard from '../components/DealsCard';
import dealsData from '../components/dealsData';
import UpcomingAppointmentCard from '../components/UpcomingAppointmentCard';


const Home = () => {

    const router = useRouter();


    const { width } = Dimensions.get('window');

    const ITEM_WIDTH = width * 0.8;
    const SPACING = 10;

    const [activeIndex, setActiveIndex] = useState(0)

    // const handleService = (id) => {

    //     // router.push(`/servicedetail/${servicesData.id}`)
    //     console.log(id)
    // }



    const handleScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / (ITEM_WIDTH + 10));
        setActiveIndex(slideIndex)

        console.log(slideIndex)

    }



    return (
        <View className='flex gap-4 bg-gray-100'>
            <ScrollView>

                <View className='flex justify-start mt-2 px-4 py-2  '>
                    <Text className='text-section-header-size font-semibold'>Featured Deals</Text>
                </View>

                <View className=''>
                    {/* Promotions Section */}

                    <FlatList
                        data={dealsData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={ITEM_WIDTH + SPACING}
                        decelerationRate="fast"
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
                        className=''
                        renderItem={({ item }) =>
                            <DealsCard title={item.title}
                                subTitle={item.subTitle}
                            />}
                        keyExtractor={item => item.id}

                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 10,
                        }}
                    >
                        {dealsData.map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    margin: 5,
                                    backgroundColor: activeIndex === index ? 'black' : 'gray',
                                }}
                            />
                        ))}
                    </View>

                    {/* Appointment Section */}
                    <View className='flex justify-start mt-2 px-4 py-2  '>
                        <View>
                            <Text className='text-black  text-section-header-size font-semibold'>Appointments</Text>
                        </View>

                        <UpcomingAppointmentCard />


                    </View>


                    {/* Services Section */}
                    <View className='flex justify-start mt-2 px-4 py-4 gap-4 '>
                        <View>
                            <Text className='text-black text-section-header-size text-left font-semibold'>Category</Text>
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
                            <Text className='text-black text-section-header-size text-left font-semibold'>Services</Text>
                        </View>


                        {/* Service Section */}
                        <View className='py-4'>
                            <FlatList
                                data={servicesData}
                                scrollEnabled
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                className='py-4'
                                renderItem={({ item }) =>
                                    <ServiceCard title={item.title}
                                        subTitle={item.subTtile}
                                        price={item.price}
                                        image={item.image}
                                        duration={item.duration}
                                        item={item.id}

                                    />}
                                keyExtractor={item => item.id}

                            />
                        </View>



                    </View>
                </View>




            </ScrollView >

        </View >
    )
}

export default Home


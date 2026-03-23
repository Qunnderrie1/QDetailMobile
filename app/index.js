import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../assets/logo.png'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const router = useRouter()


    const handleLogin = () => {

        router.push("/home")

    }




    return (
        <View className=' bg-white container flex-1 justify-center px-10 gap-10'>
            <View className='flex justify-center items-center'>
                <Image source={logo} className='w-[150px] h-[150px]' />
            </View>
            <View className=''>
                <Text className='text-black text-[40px] font-bold'>Login</Text>
                <Text className='text-black'>Login into your account to get started!</Text>
            </View>
            {/* User login crendentials Section */}
            <View>
                <View className='flex gap-2'>
                    <Text>Email Address</Text>
                    <View className='rounded-md '>
                        <TextInput value={email} onChangeText={setEmail} className=' mt-1 pl-4 py-4 bg-gray-200  mb-4 rounded-md ' placeholder='Email Address'></TextInput>
                    </View>
                </View>
                <View className='flex gap-2'>
                    <Text>Password</Text>
                    <View className='rounded-md'>
                        <TextInput value={password} onChangeText={setPassword} secureTextEntry className=' mt-1 pl-4 py-4 bg-gray-200  mb-4 rounded-md ' placeholder='Password'></TextInput>
                    </View>
                </View>
            </View>

            <View className='flex gap-8 '>
                <TouchableOpacity onPress={handleLogin} className=' bg-blue-600 py-3 flex justify-center items-center rounded-md'>
                    <Link href={"home"} className='text-white text-[20px] font-semibold'>Login</Link>
                </TouchableOpacity>

                <View className='flex flex-row gap-2 justify-center items-center'>
                    <Text className='text-black text-[16px]'>Don't have an account?</Text>
                    <Link href={"signup"} className='text-blue-500 text-[16px] '>Sign Up</Link>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

export default Login
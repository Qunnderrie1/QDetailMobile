import { Link, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../assets/logo.png'
const SignUp = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")

    const router = useRouter()

    const handleSignUp = () => {

        router.push("/home")

    }

    return (
        <View className=' container flex-1 justify-center px-10 gap-10 bg-white'>
            <View className='flex justify-center items-center'>
                <Image source={logo} className='w-[150px] h-[150px]' />
            </View>
            <View className=''>
                <Text className='text-black text-[30px] font-bold'>Create An Account</Text>
                <Text className='text-black'>Sign up to get started using our services.</Text>
            </View>
            {/* User login crendentials Section */}
            <View className='flex gap-6'>
                <View className='flex gap-2'>
                    <Text>Username</Text>
                    <View className='rounded-md'>
                        <TextInput value={username} onChangeText={setUserName} className=' mt-1 pl-4 py-4 bg-gray-200  mb-4 rounded-md ' placeholder='Username'></TextInput>
                    </View>
                </View>
                <View className='flex gap-2'>
                    <Text>Email Address</Text>
                    <View className='rounded-md'>
                        <TextInput value={email} onChangeText={setEmail} keyboardType='email-address' className=' mt-1 pl-4 py-4 bg-gray-200  mb-4 rounded-md ' placeholder='Email Address'></TextInput>
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
                <TouchableOpacity onPress={handleSignUp} className=' bg-primary-color py-3 flex justify-center items-center rounded-md'>
                    <Text className='text-white  text-[20px] font-semibold'>Sign Up</Text>
                </TouchableOpacity>

                <View className='flex flex-row gap-2 justify-center items-center'>
                    <Text className='text-black text-[16px]'>Already a member?</Text>
                    <Link href={"/"} className='text-primary-color text-[16px] font-semibold '>Login</Link>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

export default SignUp
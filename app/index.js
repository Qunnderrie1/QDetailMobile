import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, Alert, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import logo from './Images/logo.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase/firebase.config'



const LoginScreen = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [user, setUser] = useState(null)

    

    const router = useRouter()

    const handleLogin = async () => {

        try {

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user)
            router.push("home")
            console.log(router.push("home"))
            setEmail("")
            setPassword("")
        } catch (error) {
            Alert.alert("Login Error", error.message)
             
        }

    }


    return (
        <View className=' bg-white container flex-1 justify-center px-10 gap-10'>
            <View className='flex justify-center items-center'>
                <Image source={logo} className='w-[100px] h-[100px]' />
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
                        <TextInput value={email} onChangeText={setEmail} keyboardType='email-address' className=' mt-1 pl-4 py-4 border-[1.2px] border-solid border-gray-500 focus:border-blue-500 focus:border-[1.6px] mb-4 rounded-md ' ></TextInput>
                    </View>
                </View>
                <View className='flex gap-2'>
                    <Text>Password</Text>
                    <View className='rounded-md'>
                        <TextInput value={password} onChangeText={setPassword} secureTextEntry className=' mt-1 pl-4 py-4  border-[1.2px]  border-solid border-gray-500 focus:border-blue-500 focus:border-[1.6px]  mb-4 rounded-md ' ></TextInput>
                    </View>
                </View>
            </View>

            <View className='flex gap-8 '>
                <Pressable onPress={handleLogin} className=' bg-primary-color py-3 flex justify-center items-center rounded-md'>
                    <Text className='text-white text-[20px] font-semibold '>Login</Text>
                </Pressable>

                <View className='flex flex-row gap-2 justify-center items-center'>
                    <Text className='text-black text-[16px]'>Don't have an account?</Text>
                    <Link href={"signup"} className='text-primary-color text-[16px] font-semibold '>Sign Up</Link>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

export default LoginScreen
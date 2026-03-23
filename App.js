import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View className=' container flex-1 justify-center px-10 gap-40'>
      <View className=''>
        <Text className='text-black text-[40px] font-bold'>Login</Text>
        <Text className='text-black'>Login into your account to get started!</Text>
      </View>
      {/* User login crendentials Section */}
      <View>
        <View className='flex gap-2'>
          <Text>Email Address</Text>
          <View className='rounded-md'>
            <TextInput className=' mt-1 pl-4 py-4 bg-gray-200  mb-4 rounded-md ' placeholder='Email Address'></TextInput>
          </View>
        </View>
        <View className='flex gap-2'>
          <Text>Password</Text>
          <View className='rounded-md'>
            <TextInput className=' mt-1 pl-4 py-4 bg-gray-200  mb-4 rounded-md ' placeholder='Password'></TextInput>
          </View>
        </View>
      </View>

      <View className='flex gap-8 '>
        <TouchableOpacity className='bg-blue-600 py-3 flex justify-center items-center rounded-md'>
          <Text className='text-white text-[20px] font-semibold'>Login</Text>
        </TouchableOpacity>

        <View className='flex flex-row gap-2 justify-center items-center'>
          <Text className='text-black text-[16px]'>Don't have an account?</Text>
          <Text className='text-blue-500'>Sign Up</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
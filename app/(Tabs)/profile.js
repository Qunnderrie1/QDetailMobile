import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image, Alert, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import profilePic from '../Images/que.jpg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { getAuth, signOut } from 'firebase/auth';
import { auth, db, storage } from '../firebase/firebase.config';
import { StatusBar } from 'expo-status-bar';
import  { getDownloadURL, getStorage, ref, uploadBytes }  from 'firebase/storage'
import firestore , { doc , getDoc , setDoc , collection} from 'firebase/firestore'


const profile = () => {




    const router = useRouter()

    const [image, setImage] = useState(null)
    const [location ,setLocation ] = useState(null)
    const [user, setUser ] = useState(null)
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePhoto , setProfilePhoto] = useState(null)

    // User Upload Profile Photo Method
    const pickImage = async () => {
        // ask for permission
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permission to access gallery is required!")
            return;
        }

        // Open image picker
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
        })
        setImage(result)
        // saveProfilePic(auth.currentUser.uid , result.assets[0].uri)
        // uploadImage(image, auth.currentUser.uid)

                   // If user didn't cancel
        if (!result.canceled) {
            console.log("You cancel!")
        }

   

        console.log("Image : " + image)

    }

    // Logout User Account Method
    const handleUploadProfilePhoto = () => {
        pickImage()

    }

      // Fetching user data from database
         const fetchUser = async () => {
    
            const auth = getAuth();
            const activeUser = auth.currentUser
    
            if(!activeUser) return;
    
            const docRef  = doc(db , "users" , activeUser.uid)
            const docSnap = await getDoc(docRef)
    
            if(docSnap.exists()){
                setUser(docSnap.data())
      
            }
                
            }
    
         useEffect(() => {
             fetchUser()
         }, [])

        //  const getProfilePic = async (userId) => {

        //         const docRef = doc(db , "users" , userId);
        //         const snapshot = await getDoc(docRef);

        //         if(snapshot.exists()){
        //             const data = snapshot.data();
        //         setProfilePhoto(data)
        //         console.log("PROFILE PHOTO: " + profilePhoto)
        //         }else{
        //             return null
        //         }
                
        //     } 

        //  Upload Profile Photo
        // const uploadImage = async (file) => {


        //     try {
        //           const user = auth.currentUser;

        //     if(!user){
        //         throw new Error("No Authenticated User Not found");
        //     }

        //     // Convert loca to blob
        //     const response = await fetch(image)
        //     const blob = await response.blob();


        //     // Create storage path
        //     const storageRef = ref(storage , `profilePhotp/${user.uid}`);

        //     // Upload Image
        //     const downloadURL = await getDownloadURL(storageRef)
        //     return downloadURL;



                
        //     } catch (error) {
        //         console.log("Upload Error " + error)
        //         throw error;
        //     }

          
           

        // }
        // Save to fire storage
        const saveProfilePic = async (url) => {

            try {
                    const uploadImage = await setDoc(doc(db ,"users", auth.currentUser.id), {profileImage: url}, {merge: true})
                    console.log(uploadImage)


                
            } catch (error) {
                
            }



                
            
        }

        const handleProfilePhotoUpload = async (fileUrl) => {
            try {
                const downloadURL = await uploadImage(fileUrl)
                await saveProfilePic(fileUrl);
                console.log("Profile photo uploaded successfully")

                
            } catch (error) {
                console.log("Error handling, failed to upload photo")
            }
        }


    // Logout User Account Method
    const handleLogout = async () => {

        try {
            await signOut(auth)
            router.dismissAll()

        } catch (error) {
            Alert.alert("Logout Failed", error.message)

        }


    }

    const handleSettings = () => {

    }


    const handleInformation = () => {

        
    }
    const handleUploadProfilePic =  async() => {

    }

    // Delete User Account Method
    const handleAccount = () => {


    }


    return (
        <SafeAreaView className='flex-1  '>
             <View className='bg-primary-color h-[170px] w-full absolute top-0'>
                
             </View>
            <View className=' h-[300px] flex justify-center items-center'>
                <View className='flex gap-8 justify-center items-center'>
                    <View className='relative w-[80px] h-[80px] bg-gray-200  justify-center items-center border-white border-solid border-2 rounded-full'>
                        {
                            profilePhoto == null ? <Ionicons size={28} name='person' /> : <Image source={auth.profileImage} /> 
                        }
                        <Pressable onPress={handleUploadProfilePhoto} className='bg-blue-500 rounded-full w-[30px] h-[30px] flex justify-center absolute bottom-0 right-0 items-center '>
                            <Ionicons name="camera" size={18} color="white" />
                        </Pressable>
                    </View>
                    <View className='flex justify-center items-center'>
                        <Text className='text-[16px] font-medium '>{user ? user.username : "No Name"}</Text>
                        <Text className='text-gray-600 '>{auth.currentUser.email}</Text>
                        </View>

                </View>
            </View>
        {/* User Information Section */}
            <View className='flex justify-center  px-8 w-full'>
                  <View className='flex gap-6'>
                    <View className='flex flex-row justify-between items-center'>
                        <View className='flex flex-row-reverse items-center gap-6'>
                        <Text className='text-[16px]'>Your Profile</Text>
                        <Pressable onPress={handleSettings}>
                        <Ionicons name='person-outline' size={20} />
                        </Pressable>
                        </View>
                    <View className='rounded-md '>
                        <Ionicons name='chevron-forward-outline' size={20} />
                    </View>
                    </View>
                    <View className='flex flex-row justify-between items-center'>
                        <View className='flex flex-row-reverse items-center gap-6'>
                        <Text className=' text-[16px]'>Settings</Text>
                        <Pressable onPress={handleInformation}>
                            <Ionicons name='settings-outline' size={20} />
                        </Pressable>
                        </View>
                    <View className='rounded-md '>
                        <Ionicons name='chevron-forward-outline' size={20} />
                    </View>
                    </View>
                        <View className='flex flex-row justify-between items-center'>
                        <View className='flex flex-row-reverse items-center gap-6'>
                        <Text className=' text-[16px]'>Payment</Text>
                        <Ionicons  name='card-outline' size={24} />
                        </View>
                    <View className='rounded-md '>
                        <Pressable onPress={handleLogout}>
                            <Ionicons name='chevron-forward-outline' size={20} />
                        </Pressable>
                    </View>
                    </View>
                       <View className='flex flex-row justify-between items-center'>
                        <View className='flex flex-row-reverse items-center gap-6'>
                        <Text className='text-red-500 text-[16px]'>Logout</Text>
                        <Ionicons  name='log-out-outline' size={24} />
                        </View>
                    <View className='rounded-md '>
                        <Pressable onPress={handleLogout}>
                            <Ionicons name='chevron-forward-outline' size={20} />
                        </Pressable>
                    </View>
                    </View>
                </View>
            </View>


            <View className='flex flex-row gap-8 justify-center'>
           
            </View>
        </SafeAreaView>
    )
}

export default profile


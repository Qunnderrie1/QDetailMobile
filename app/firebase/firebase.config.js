import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'





const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSendId: "",
    appId: "",
}

const app = initializeApp(firebaseConfig);


console.log(process.env.EXPO_PUBLIC_API_KEY)

export const db = getFirestore(app)

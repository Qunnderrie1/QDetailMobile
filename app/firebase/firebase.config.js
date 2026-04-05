import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { API_KEY, AUTH_DOMAIN, MESSAGING_SENDER_ID, APP_ID, PROJECT_ID, STORAGE_BUCKET } from '../Constants/Constants'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSendId: MESSAGING_SENDER_ID,
    appId: APP_ID,
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

console.log(db)

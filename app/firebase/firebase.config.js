import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { API_KEY, AUTH_DOMAIN, MESSAGING_SENDER_ID, APP_ID, PROJECT_ID, STORAGE_BUCKET } from '../Constants'



const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSendId: MESSAGING_SENDER_ID,
    appId: APP_ID,
}

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app)

import Firebase from 'firebase';
import {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_DATABASE_URL,
	FIREBASE_PROJECT_ID,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID } 
from 'react-native-dotenv';

let config = {
	apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
}

let app = Firebase.initializeApp(config);

export const Database = app.database();
export const Auth = app.auth();
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCb4qGYfJ3irRxLxLsdLPpL3tVr0aj789k",
    authDomain: "pomodoro-5c927.firebaseapp.com",
    projectId: "pomodoro-5c927",
    storageBucket: "pomodoro-5c927.appspot.com",
    messagingSenderId: "546866238808",
    appId: "1:546866238808:web:edb9cacc51df5a2ceb812d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()


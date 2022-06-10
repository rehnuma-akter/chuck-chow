// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAU7Ca48u0dJ1MyO2REP2lduaZoLuul8aM",
    authDomain: "chuck-chow-30a38.firebaseapp.com",
    projectId: "chuck-chow-30a38",
    storageBucket: "chuck-chow-30a38.appspot.com",
    messagingSenderId: "482433476421",
    appId: "1:482433476421:web:6652d83659b60b1a01002c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
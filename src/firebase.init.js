// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-3XufIpz-Gq5FOi_IvPwIbfwKUhVSmI",
  authDomain: "to-do-app-40bcb.firebaseapp.com",
  projectId: "to-do-app-40bcb",
  storageBucket: "to-do-app-40bcb.appspot.com",
  messagingSenderId: "250384639276",
  appId: "1:250384639276:web:8f9f9ddceb53e9b3cfb889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
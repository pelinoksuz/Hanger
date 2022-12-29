// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyClSgH8MyYwQwcHsW0RBgrZXMeKZyVCfz4",
    authDomain: "hang-f9b0f.firebaseapp.com",
    projectId: "hang-f9b0f",
    storageBucket: "hang-f9b0f.appspot.com",
    messagingSenderId: "148001124825",
    appId: "1:148001124825:web:80a2577fe214ff14dc69c8"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
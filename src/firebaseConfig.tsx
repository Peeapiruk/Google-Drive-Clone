// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_Ib_PYsI8YZmqU5JlmRxxJyPris1HaHc",
  authDomain: "drive2forstore.firebaseapp.com",
  projectId: "drive2forstore",
  storageBucket: "drive2forstore.appspot.com",
  messagingSenderId: "647768949860",
  appId: "1:647768949860:web:594d90cea33ec241b84b71"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);

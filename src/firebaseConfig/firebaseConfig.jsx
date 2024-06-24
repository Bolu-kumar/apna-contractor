// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWIFQb9gUI2_xI3JF7IwOwEk0A3sG0zzc",
  authDomain: "rkdk-contractor.firebaseapp.com",
  projectId: "rkdk-contractor",
  storageBucket: "rkdk-contractor.appspot.com",
  messagingSenderId: "975090582962",
  appId: "1:975090582962:web:674fb34c93995b835f90ab",
  measurementId: "G-3JPX3YG6SD",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
export const db = getDatabase(firebaseApp); // Initialize Realtime Database

export default firebaseApp;

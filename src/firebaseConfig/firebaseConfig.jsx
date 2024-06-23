// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWIFQb9gUI2_xI3JF7IwOwEk0A3sG0zzc",
  authDomain: "rkdk-contractor.firebaseapp.com",
  projectId: "rkdk-contractor",
  storageBucket: "rkdk-contractor.appspot.com",
  messagingSenderId: "975090582962",
  appId: "1:975090582962:web:674fb34c93995b835f90ab",
  measurementId: "G-3JPX3YG6SD",
};

const firabaseApp = initializeApp(firebaseConfig);
// const auth = getAuth();
export default firabaseApp;

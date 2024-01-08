// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVTvuorm9rRAYs_oZ2swYwVlVcNWjjAcI",
  authDomain: "puppyculture-44ebd.firebaseapp.com",
  projectId: "puppyculture-44ebd",
  storageBucket: "puppyculture-44ebd.appspot.com",
  messagingSenderId: "676348986066",
  appId: "1:676348986066:web:8c6292c9a83137ac8e230b",
  measurementId: "G-VGZB7CX02Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};
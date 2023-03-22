// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB348A4dHeAF43_MIHY1E4dxXFw0DoRXqk",
  authDomain: "to-leet.firebaseapp.com",
  projectId: "to-leet",
  storageBucket: "to-leet.appspot.com",
  messagingSenderId: "365860902637",
  appId: "1:365860902637:web:50da0d4968101914c31ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

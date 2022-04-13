// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzHtYeDdBSMih2E6S4Ve_LaOeffNYpPcc",
    authDomain: "fir-practice-01-8d9fd.firebaseapp.com",
    projectId: "fir-practice-01-8d9fd",
    storageBucket: "fir-practice-01-8d9fd.appspot.com",
    messagingSenderId: "413449687062",
    appId: "1:413449687062:web:ed98f4e9a2922aa71fe537"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
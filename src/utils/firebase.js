// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsVfZrClJBdvMq6gNCdOHnX33Dcp83G0I",
  authDomain: "mynetflix-2afa3.firebaseapp.com",
  projectId: "mynetflix-2afa3",
  storageBucket: "mynetflix-2afa3.appspot.com",
  messagingSenderId: "209065348146",
  appId: "1:209065348146:web:20deb175a9722661bd402b",
  measurementId: "G-HVVXCDKD4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
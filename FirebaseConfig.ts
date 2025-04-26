// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCnsCpYDr9xTtp-HvvUIkGmeSZThXvOg4",
  authDomain: "thuephongtro-b8f40.firebaseapp.com",
  projectId: "thuephongtro-b8f40",
  storageBucket: "thuephongtro-b8f40.firebasestorage.app",
  messagingSenderId: "947458236508",
  appId: "1:947458236508:web:69c4033088490768ac8699",
  measurementId: "G-E4HCDJZZNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_QT0L7w2AY5EXGCZ9jKX31510sq1pUvA",
  authDomain: "winbook-6a2e8.firebaseapp.com",
  projectId: "winbook-6a2e8",
  storageBucket: "winbook-6a2e8.appspot.com",
  messagingSenderId: "227067923514",
  appId: "1:227067923514:web:20de15eef7615fac22f903",
  measurementId: "G-5PWEY35RZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
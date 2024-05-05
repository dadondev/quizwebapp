// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Y-PAZsnu7RelsKW91YJVP432HHeTGOo",
  authDomain: "quizapp-ea4cc.firebaseapp.com",
  projectId: "quizapp-ea4cc",
  storageBucket: "quizapp-ea4cc.appspot.com",
  messagingSenderId: "396934706743",
  appId: "1:396934706743:web:8ac1723d1b0f16062131b2",
  measurementId: "G-JTD0K3L0VW",
  databaseURL:
    "https://quizapp-ea4cc-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const realDB = getDatabase(app);
export { app, auth, realDB };

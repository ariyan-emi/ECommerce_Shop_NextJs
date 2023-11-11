import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgnGkG2wlwyh3wKyi10OnqvJiJKmbXKEY",
  authDomain: "nextjsecommerce-c8701.firebaseapp.com",
  databaseURL: "https://nextjsecommerce-c8701-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nextjsecommerce-c8701",
  storageBucket: "nextjsecommerce-c8701.appspot.com",
  messagingSenderId: "407240513288",
  appId: "1:407240513288:web:a03bd31c13287f570afebd",
  measurementId: "G-TFHK7746RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, db, auth };

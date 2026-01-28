import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5KISpgTkuVbFLuyc0WNhZFrERLbMwY_E",
  authDomain: "our-cute-site.firebaseapp.com",
  databaseURL: "https://our-cute-site-default-rtdb.firebaseio.com",
  projectId: "our-cute-site",
  storageBucket: "our-cute-site.firebasestorage.app",
  messagingSenderId: "942963870478",
  appId: "1:942963870478:web:eb781f30b9168ca7d8e55f",
  measurementId: "G-RQTPTYT7EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

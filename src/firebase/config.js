import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBerXa2arRzAwKK5_bRfsO5Dl_8Ji-uK2E",
  authDomain: "proyecto-react-store.firebaseapp.com",
  projectId: "proyecto-react-store",
  storageBucket: "proyecto-react-store.appspot.com",
  messagingSenderId: "664643920108",
  appId: "1:664643920108:web:30b353c7746e8bf58685c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
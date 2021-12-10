import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "proyecto-react-store.firebaseapp.com",
  projectId: "proyecto-react-store",
  storageBucket: "proyecto-react-store.appspot.com",
  messagingSenderId: "664643920108",
  appId: process.env.VUE_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "algo-store.firebaseapp.com",
  projectId: "algo-store",
  storageBucket: "algo-store.appspot.com",
  messagingSenderId: "876446205919",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-MK66JVZZM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

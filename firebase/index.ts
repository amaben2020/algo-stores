import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "algo-stores-1.firebaseapp.com",
  projectId: "algo-stores-1",
  storageBucket: "algo-stores-1.appspot.com",
  messagingSenderId: "235192376879",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-NTS34VM4JX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

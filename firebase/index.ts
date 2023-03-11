import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-j43_PzUe5vtBURpUh36KeDdqiT07RI4",
  authDomain: "algo-store.firebaseapp.com",
  projectId: "algo-store",
  storageBucket: "algo-store.appspot.com",
  messagingSenderId: "876446205919",
  appId: "1:876446205919:web:6fd532efe860b9314fe66a",
  measurementId: "G-MK66JVZZM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

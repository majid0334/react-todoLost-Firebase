import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0HZd4kOtzcpyGffv6EM6gsmTicObAoe8",
  authDomain: "react-bc3a4.firebaseapp.com",
  projectId: "react-bc3a4",
  storageBucket: "react-bc3a4.appspot.com",
  messagingSenderId: "929742958683",
  appId: "1:929742958683:web:a825574e8da32641da4f7e",
  measurementId: "G-B85SBL5JCW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

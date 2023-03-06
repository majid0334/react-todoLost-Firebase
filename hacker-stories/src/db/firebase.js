import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //skriva din eget
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

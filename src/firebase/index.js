import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCgzW-Ik3Xbio8b-uA971j0qIlAGQJXaFY",
  authDomain: "pbc-app-13147.firebaseapp.com",
  projectId: "pbc-app-13147",
  storageBucket: "pbc-app-13147.appspot.com",
  messagingSenderId: "413229361240",
  appId: "1:413229361240:web:ab04708d8319625897822d",
  measurementId: "G-JK44E2MZM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}
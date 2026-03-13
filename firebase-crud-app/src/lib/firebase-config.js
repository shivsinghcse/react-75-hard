
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBC_EmGyIVzoEE1dpaKDQFuAVieHPZX22E",
  authDomain: "fir-crud-f1c8e.firebaseapp.com",
  projectId: "fir-crud-f1c8e",
  storageBucket: "fir-crud-f1c8e.firebasestorage.app",
  messagingSenderId: "465118608338",
  appId: "1:465118608338:web:a65e54bc1c82ddced3260b",
  measurementId: "G-9N0C2K8XK9"
};


const firebaseConfigApp = initializeApp(firebaseConfig);

export default firebaseConfigApp
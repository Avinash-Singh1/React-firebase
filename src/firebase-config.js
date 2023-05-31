import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDsdFLqK_UDqt9YEbvo13ZZalBu_lP6pCI",
    authDomain: "fir-tutorial-2081c.firebaseapp.com",
    projectId: "fir-tutorial-2081c",
    storageBucket: "fir-tutorial-2081c.appspot.com",
    messagingSenderId: "26817324166",
    appId: "1:26817324166:web:c198ffff0280b1b4abdd07",
    measurementId: "G-PX9B05P64V"
  };
  const app= initializeApp(firebaseConfig);
  export const db = getFirestore(app)
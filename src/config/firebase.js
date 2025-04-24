import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-course-5d4f0.firebaseapp.com",
  projectId: "fir-course-5d4f0",
  storageBucket: "fir-course-5d4f0.firebasestorage.app",
  messagingSenderId: "659891357688",
  appId: "1:659891357688:web:bdbb29bc1b2fed1a63f80d",
  measurementId: "G-MFCZPR2NW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
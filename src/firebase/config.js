import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRVY-4opste_dFfxWRpE2CTluJzlMaEv4",
  authDomain: "excellent-weaving-amizmiz.firebaseapp.com",
  projectId: "excellent-weaving-amizmiz",
  storageBucket: "excellent-weaving-amizmiz.firebasestorage.app",
  messagingSenderId: "1087344160534",
  appId: "1:1087344160534:web:fc421d1f1d0674d558aa37",
  measurementId: "G-MXD4RC8Y64"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;

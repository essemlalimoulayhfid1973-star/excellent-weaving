import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRVY-4opste_dFfxWRpE2CTluJzlMaEv4",
  authDomain: "excellent-weaving-amizmiz.firebaseapp.com",
  projectId: "excellent-weaving-amizmiz",
  storageBucket: "excellent-weaving-amizmiz.firebasestorage.app",
  messagingSenderId: "1087344160534",
  appId: "1:1087344160534:web:59eccb1f7d89eb1f58aa37",
  measurementId: "G-J2PKSW8ZHM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

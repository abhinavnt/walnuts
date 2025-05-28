import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const apiKey = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_API_KEY;
const authDomain = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_AUTH_DOMAIN;
const databaseURL = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_DATABASE_URL;
const projectId = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_APP_ID;
const measurementId = (import.meta as unknown as ImportMeta).env.VITE_FIREBASE_MEASUREMENT_ID;

// Firebase configuration object
const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

export { db };

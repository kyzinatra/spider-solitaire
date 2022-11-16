import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_KEY,
  authDomain: "spider-96cf8.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_DB_URL,
  projectId: "spider-96cf8",
  storageBucket: "spider-96cf8.appspot.com",
  messagingSenderId: "244314047263",
  appId: process.env.NEXT_PUBLIC_API_ID,
};

export const app = initializeApp(firebaseConfig);

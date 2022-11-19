import { getAuth } from "firebase/auth";
import { FirebaseOptions, initializeApp } from "firebase/app";
import { AppCheck, initializeAppCheck, ReCaptchaV3Provider, setTokenAutoRefreshEnabled } from "firebase/app-check";
import { getDatabase } from "firebase/database";
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_KEY,
  authDomain: "spider-96cf8.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_DB_URL,
  projectId: "spider-96cf8",
  storageBucket: "spider-96cf8.appspot.com",
  messagingSenderId: "244314047263",
  appId: process.env.NEXT_PUBLIC_API_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
let appCheck: AppCheck;
if (typeof document !== "undefined") {
  console.log(process.env.NEXT_PUBLIC_CAPTHCA_DEBUG);
  appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_CAPTHCA_KEY || ""),

    isTokenAutoRefreshEnabled: true,
  });
  setTokenAutoRefreshEnabled(appCheck, true);
}

export { appCheck };
export const db = getDatabase(app);

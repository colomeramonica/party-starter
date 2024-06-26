import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDSZrTCePCwuKdihGp5IdxS_kWH7Pfo_co",
  authDomain: "party-starter-c5bf0.firebaseapp.com",
  databaseURL: "https://party-starter-c5bf0-default-rtdb.firebaseio.com",
  projectId: "party-starter-c5bf0",
  storageBucket: "party-starter-c5bf0.appspot.com",
  messagingSenderId: "126637866382",
  appId: "1:126637866382:web:293e8d41e74873041c38df",
  measurementId: "G-28SS7YTGVQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const storage = getStorage(firebaseApp);

export { storage, analytics, firebaseApp }
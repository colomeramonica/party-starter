// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = firebaseConfig.storage();

export { storage, analytics, app }
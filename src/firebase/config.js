// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa71ZKRr-4-l6cjcS09f6jBvNCKMmXKxA",
  authDomain: "journal-react-34bdb.firebaseapp.com",
  projectId: "journal-react-34bdb",
  storageBucket: "journal-react-34bdb.appspot.com",
  messagingSenderId: "916541448250",
  appId: "1:916541448250:web:9ee2301fd03c47ec721503",
  measurementId: "G-2PV4FSZZEN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAA-utidCeiKBIvG-QjjnSDqyI5MaU8Pc",
  authDomain: "my-project-f5cd0.firebaseapp.com",
  projectId: "my-project-f5cd0",
  storageBucket: "my-project-f5cd0.appspot.com",
  messagingSenderId: "1068335854376",
  appId: "1:1068335854376:web:11e5d11af2eb8386ab961d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHp6YCaeXFXE0NXio8SwYQzpktMJATbpA",
  authDomain: "my-portfolio-ab0dc.firebaseapp.com",
  projectId: "my-portfolio-ab0dc",
  storageBucket: "my-portfolio-ab0dc.appspot.com",
  messagingSenderId: "283464885155",
  appId: "1:283464885155:web:8169bd5fec6d409874b016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpMi7FAnZkgLYvA7FPADETkDXrIZWauM",
  authDomain: "mern-book-inventory-5d80c.firebaseapp.com",
  projectId: "mern-book-inventory-5d80c",
  storageBucket: "mern-book-inventory-5d80c.appspot.com",
  messagingSenderId: "14267519613",
  appId: "1:14267519613:web:18ac88635c7e9a2db3d714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
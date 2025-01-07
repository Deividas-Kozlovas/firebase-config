// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';

import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMbjVdqfawMGXg4QM_Ho0qO958vpOJLBA",
  authDomain: "testiniai-dc5da.firebaseapp.com",
  databaseURL: "https://testiniai-dc5da-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testiniai-dc5da",
  storageBucket: "testiniai-dc5da.firebasestorage.app",
  messagingSenderId: "714893551444",
  appId: "1:714893551444:web:f7d8232e288dbc20968ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
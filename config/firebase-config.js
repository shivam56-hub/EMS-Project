// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDuHXTrKW-gUPYBpNbRw2lDHBthk8R0_0",
  authDomain: "emsproject-abf58.firebaseapp.com",
  projectId: "emsproject-abf58",
  storageBucket: "emsproject-abf58.firebasestorage.app",
  messagingSenderId: "1001740686281",
  appId: "1:1001740686281:web:14a19d7bab4cb313c4ce18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


//  we are connecting our application to database
 export const db = getFirestore(app)
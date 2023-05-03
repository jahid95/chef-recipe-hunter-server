// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5HyHHbF8GZqSSvlBsJ30nbR4atVXcFnk",
  authDomain: "the-american-chef.firebaseapp.com",
  projectId: "the-american-chef",
  storageBucket: "the-american-chef.appspot.com",
  messagingSenderId: "613164104051",
  appId: "1:613164104051:web:aa07909abbb72d4083ed06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
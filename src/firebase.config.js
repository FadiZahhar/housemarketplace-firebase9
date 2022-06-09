// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3xbCPiibR3iipVejuNpm2jEMfjpJtCs",
  authDomain: "fir-recipes-eaba0.firebaseapp.com",
  databaseURL: "https://fir-recipes-eaba0-default-rtdb.firebaseio.com",
  projectId: "fir-recipes-eaba0",
  storageBucket: "fir-recipes-eaba0.appspot.com",
  messagingSenderId: "994013080160",
  appId: "1:994013080160:web:ccb48d6e4e56abc409b105",
  measurementId: "G-6V2T9TBYLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
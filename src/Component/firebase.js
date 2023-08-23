
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKQDkqYcgXf7oT7tCkNQEkzhwWg5BDx3A",
  authDomain: "liciousotp.firebaseapp.com",
  projectId: "liciousotp",
  storageBucket: "liciousotp.appspot.com",
  messagingSenderId: "1022485065439",
  appId: "1:1022485065439:web:7901b8f17d3419694d036a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



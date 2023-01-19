import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0s3okSIqhadXqXwnXIBxbCtoRGa7NrRA",
  authDomain: "react-netflix-ae402.firebaseapp.com",
  projectId: "react-netflix-ae402",
  storageBucket: "react-netflix-ae402.appspot.com",
  messagingSenderId: "43311182535",
  appId: "1:43311182535:web:ee95981a4d0cec569084e2",
  measurementId: "G-M9Z6LGMJGC"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

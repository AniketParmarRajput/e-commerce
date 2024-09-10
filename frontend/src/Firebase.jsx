import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5FLastzq30QqCtusaauHCu-Gf_0av8Uo",
  authDomain: "fir-auth-4eeae.firebaseapp.com",
  projectId: "fir-auth-4eeae",
  storageBucket: "fir-auth-4eeae.appspot.com",
  messagingSenderId: "179787763112",
  appId: "1:179787763112:web:55ec5cd29a0356196fe19d",
  measurementId: "G-61H4H67MZ6"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider};
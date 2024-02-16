// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP6Oiul3v-brwvdDD8iKgYUvY8Tzq5__w",
  authDomain: "crud-react-93b00.firebaseapp.com",
  projectId: "crud-react-93b00",
  storageBucket: "crud-react-93b00.appspot.com",
  messagingSenderId: "175643387193",
  appId: "1:175643387193:web:d79285191b9e75908534e8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
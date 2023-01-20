// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjVdCw_OIuE7NK_BALZHqNbvSy7GbaTzk",
  authDomain: "nuxt-spa-book-app-d00df.firebaseapp.com",
  projectId: "nuxt-spa-book-app-d00df",
  storageBucket: "nuxt-spa-book-app-d00df.appspot.com",
  messagingSenderId: "322829708836",
  appId: "1:322829708836:web:dd17edd34977ee597a72b1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default ( context, inject ) => {
  inject('firebase', firebaseApp)
}
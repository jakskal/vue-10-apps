// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh_yPVY_8ILrYSjASHGzYsirJE2R5W_Iw",
  authDomain: "vue-full-course-c4db5.firebaseapp.com",
  databaseURL: "https://vue-full-course-c4db5.firebaseio.com",
  projectId: "vue-full-course-c4db5",
  storageBucket: "vue-full-course-c4db5.appspot.com",
  messagingSenderId: "832226760810",
  appId: "1:832226760810:web:ca3c562682a6ab4c549213",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsref = db.ref("chats");

export default firebase;

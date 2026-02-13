import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVzEfDFC02tzU74v7uw1hjEMTtUdNVHOQ",
  authDomain: "primedomains-africa.firebaseapp.com",
  projectId: "primedomains-africa",
  storageBucket: "primedomains-africa.firebasestorage.app",
  messagingSenderId: "186190235728",
  appId: "1:186190235728:web:00fdbc0177cd579f7ce955"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

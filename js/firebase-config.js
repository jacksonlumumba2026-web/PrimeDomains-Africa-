// Firebase Core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

// Firebase Services
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";


// 🔥 YOUR PROJECT CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDVzEfDFC02tzU74v7uw1hjEMTtUdNVHOQ",
  authDomain: "primedomains-africa.firebaseapp.com",
  projectId: "primedomains-africa",
  storageBucket: "primedomains-africa.firebasestorage.app",
  messagingSenderId: "186190235728",
  appId: "1:186190235728:web:00fdbc0177cd579f7ce955",
  measurementId: "G-WV8KCZQX73"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

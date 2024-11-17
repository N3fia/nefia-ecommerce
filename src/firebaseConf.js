// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBKio8nH6HhSpqsiqNm40UMj2lm0t5vVLQ",
	authDomain: "stitchrevobe.firebaseapp.com",
	projectId: "stitchrevobe",
	storageBucket: "stitchrevobe.firebasestorage.app",
	messagingSenderId: "180871992716",
	appId: "1:180871992716:web:4eff9e1575a21e61e672a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

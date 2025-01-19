import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnzMG0smZcZX9DxAdHYTWpUM3batbHGD4",
    authDomain: "notion-clone-be0a7.firebaseapp.com",
    projectId: "notion-clone-be0a7",
    storageBucket: "notion-clone-be0a7.firebasestorage.app",
    messagingSenderId: "720648077659",
    appId: "1:720648077659:web:3f6c248c202ab97afcda7e"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db }
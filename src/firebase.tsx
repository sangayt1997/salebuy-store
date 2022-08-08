import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBM86AMMQASD89fqGyQ6vLC96000U6086w",
    authDomain: "nog-tshong.firebaseapp.com",
    projectId: "nog-tshong",
    storageBucket: "nog-tshong.appspot.com",
    messagingSenderId: "262456222076",
    appId: "1:262456222076:web:eab5b8faef96df8a02c4f9",
    measurementId: "G-VKZ3BWG3JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

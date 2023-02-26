
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAMcQZtX5l_XydX05aanhCeNgIZ5F9v-zU",
authDomain: "nekocat-about.firebaseapp.com",
projectId: "nekocat-about",
storageBucket: "nekocat-about.appspot.com",
messagingSenderId: "836424680394",
appId: "1:836424680394:web:dafce854fbe0dd7bf1c533",
measurementId: "G-X865EJH1CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

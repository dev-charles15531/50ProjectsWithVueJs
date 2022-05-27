import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMuZfASgs2vbv6kLvLJypedJjJc0j6UpM",
    authDomain: "projectswithvue.firebaseapp.com",
    projectId: "projectswithvue",
    storageBucket: "projectswithvue.appspot.com",
    messagingSenderId: "1083246918450",
    appId: "1:1083246918450:web:60626ce38835f23983352b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
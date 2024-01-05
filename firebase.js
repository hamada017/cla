// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLDOdAmYOMa0h2HN7avlcmr7Au8Gk5y20",
  authDomain: "clarify-9d4fc.firebaseapp.com",
  projectId: "clarify-9d4fc",
  storageBucket: "clarify-9d4fc.appspot.com",
  messagingSenderId: "360005657651",
  appId: "1:360005657651:web:c53c32e4653af16b952f46"
};

// Initialize Firebase
let app;
if(firebase.app.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth = firebase.auth()

export {auth}
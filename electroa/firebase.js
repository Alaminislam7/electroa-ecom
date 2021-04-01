import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDfMGCrhkSMr9l7Qj9PuPG44ibHZjFX6ns",
  authDomain: "electroa-ecom.firebaseapp.com",
  projectId: "electroa-ecom",
  storageBucket: "electroa-ecom.appspot.com",
  messagingSenderId: "822212715296",
  appId: "1:822212715296:web:0a6f520a40d665a51dad45",
  measurementId: "G-HRXQ4BCT0Q",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default !firebase.auth() 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.auth();
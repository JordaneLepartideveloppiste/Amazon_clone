import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZjSQP8KoTNVvw_6DGZXNtrmBZByNoEFI",
  authDomain: "clone-30ce2.firebaseapp.com",
  projectId: "clone-30ce2",
  storageBucket: "clone-30ce2.appspot.com",
  messagingSenderId: "822244169989",
  appId: "1:822244169989:web:44ff71f49236ffee70ff6c",
  measurementId: "G-LYDX6TP7B7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

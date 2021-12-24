import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkKetxxUpOObbL11P9YBKujA1sqmamwPc",
  authDomain: "v-linkedin-clone.firebaseapp.com",
  projectId: "v-linkedin-clone",
  storageBucket: "v-linkedin-clone.appspot.com",
  messagingSenderId: "199155481014",
  appId: "1:199155481014:web:cde496dca587b14ceae917",
  measurementId: "G-XSGNQDQRGL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDagwBcd8E8k9EmigjZ_YV02IbeBkYqr98",
  authDomain: "disney-clone-d5e85.firebaseapp.com",
  projectId: "disney-clone-d5e85",
  storageBucket: "disney-clone-d5e85.appspot.com",
  messagingSenderId: "292728449101",
  appId: "1:292728449101:web:75fdc621c967b443ee5404",
  measurementId: "G-VPRLB0DNLD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, auth, provider };
export default db;

import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7rDpaKU9FZJME99Mv7pdpskOFD7sCDKM",
    authDomain: "tinder-clone-264f9.firebaseapp.com",
    databaseURL: "https://tinder-clone-264f9.firebaseio.com",
    projectId: "tinder-clone-264f9",
    storageBucket: "tinder-clone-264f9.appspot.com",
    messagingSenderId: "1038272618379",
    appId: "1:1038272618379:web:02379a19bc2430226c998e",
    measurementId: "G-90BNQ0HK4R"
};

const FirebaseApp = Firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const storage = FirebaseApp.storage();
const auth = FirebaseApp.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export default db;
export {storage,auth,provider};
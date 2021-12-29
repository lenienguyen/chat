import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBiSxbRDde70QCQ2BSxA8S1rOZNjxj8nms",
    authDomain: "chat-website-88b81.firebaseapp.com",
    projectId: "chat-website-88b81",
    storageBucket: "chat-website-88b81.appspot.com",
    messagingSenderId: "618236994414",
    appId: "1:618236994414:web:298a2fab60d6a3d989177f"
};

// init
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth }
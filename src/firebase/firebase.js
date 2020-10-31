// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADFrEWjd-qyuDBnOqS6osaqmx8tOBYnmo",
    authDomain: "fb-clone-3f749.firebaseapp.com",
    databaseURL: "https://fb-clone-3f749.firebaseio.com",
    projectId: "fb-clone-3f749",
    storageBucket: "fb-clone-3f749.appspot.com",
    messagingSenderId: "623347944210",
    appId: "1:623347944210:web:61aaa0907d505e754381cb",
    measurementId: "G-7HG4T84D33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;
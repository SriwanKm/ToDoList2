import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDdiUfM1ZwhzXWXiZrKRmU8zb0KY30i9zQ",
    authDomain: "todolist2-e4def.firebaseapp.com",
    projectId: "todolist2-e4def",
    storageBucket: "todolist2-e4def.appspot.com",
    messagingSenderId: "606899238942",
    appId: "1:606899238942:web:5b9e89f4d91a0e8f24960f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJtn9j0sEyuD1Fcx-5gOvqlR1MpgTO5EM",
    authDomain: "toktoklives.firebaseapp.com",
    projectId: "toktoklives",
    storageBucket: "toktoklives.appspot.com",
    messagingSenderId: "991736281773",
    appId: "1:991736281773:web:3caef4b65c3d7839fbe424",
    measurementId: "G-DVS82NZVVJ"
};
const app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore(app);
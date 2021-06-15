import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsB0nAi08XISNMKluu-hdmjVLQpHrROh8",
    authDomain: "e-zone1.firebaseapp.com",
    projectId: "e-zone1",
    storageBucket: "e-zone1.appspot.com",
    messagingSenderId: "925688505263",
    appId: "1:925688505263:web:dba7248d6ca791f756c55a",
    measurementId: "G-X72QWYGD2Z"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth};
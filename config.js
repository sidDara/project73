import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyApS99J5_BHylDMNY4APirwYCKOMKmhXAY",
    authDomain: "story-app-f1a81.firebaseapp.com",
    databaseURL: "https://story-app-f1a81-default-rtdb.firebaseio.com",
    projectId: "story-app-f1a81",
    storageBucket: "story-app-f1a81.appspot.com",
    messagingSenderId: "804907843956",
    appId: "1:804907843956:web:9bc19772cc69e43eeb2c21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
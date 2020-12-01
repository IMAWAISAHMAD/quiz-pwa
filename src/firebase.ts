import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-gcHEyqBXJAFRjNEjHyoSJ2W_otDFkU4",
    authDomain: "bootcamp2020-project7a.firebaseapp.com",
    databaseURL: "https://bootcamp2020-project7a.firebaseio.com",
    projectId: "bootcamp2020-project7a",
    storageBucket: "bootcamp2020-project7a.appspot.com",
    messagingSenderId: "83054083503",
    appId: "1:83054083503:web:bd346eda6356182750835a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
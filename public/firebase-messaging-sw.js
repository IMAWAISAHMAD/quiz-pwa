
/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC-gcHEyqBXJAFRjNEjHyoSJ2W_otDFkU4",
    authDomain: "bootcamp2020-project7a.firebaseapp.com",
    databaseURL: "https://bootcamp2020-project7a.firebaseio.com",
    projectId: "bootcamp2020-project7a",
    storageBucket: "bootcamp2020-project7a.appspot.com",
    messagingSenderId: "83054083503",
    appId: "1:83054083503:web:bd346eda6356182750835a"
});

firebase.messaging();


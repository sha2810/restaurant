// firebase-messaging-sw.js
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here.
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
const firebaseConfig = {
  apiKey: "AIzaSyA2oIAkYwBQeCkP88wJopoKC8ULgID043E",
  authDomain: "restaurent-8bce8.firebaseapp.com",
  projectId: "restaurent-8bce8",
  storageBucket: "restaurent-8bce8.firebasestorage.app",
  messagingSenderId: "210383076768",
  appId: "1:210383076768:web:1ed82e9ec330b76beb78c5",
  measurementId: "G-K69EFNCRG1"
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA_Z2lDmN-3I_ivBx4hpWhO-Oyf4ybGufE",
  authDomain: "dashboardalex.firebaseapp.com",
  projectId: "dashboardalex",
  storageBucket: "dashboardalex.appspot.com",
  messagingSenderId: "467343097276",
  appId: "1:467343097276:web:5b4d3c8e940057ee97ffb9",
  measurementId: "G-349FG2DTV1"
});

const messaging = firebase.messaging();

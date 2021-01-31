// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from 'firebase';
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAGVKIFf9iuxHrQohngDvbI2HnJXa8xUAM",
  authDomain: "reactnative-demo-coaching-call.firebaseapp.com",
  projectId: "reactnative-demo-coaching-call",
  storageBucket: "reactnative-demo-coaching-call.appspot.com",
  messagingSenderId: "56510804552",
  appId: "1:56510804552:web:be25530f383949c9565e7d",
  measurementId: "G-1X9TH0L9Y3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export {db};
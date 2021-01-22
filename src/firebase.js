import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyC9BFwuXV3bgIWdF06wP5eADo27LUDIJ_w',
  authDomain: 'react-slack-app-f981e.firebaseapp.com',
  projectId: 'react-slack-app-f981e',
  storageBucket: 'react-slack-app-f981e.appspot.com',
  messagingSenderId: '485928686359',
  appId: '1:485928686359:web:bd041278fdb43b0cfd1d52',
  measurementId: 'G-8PF04SZCFQ',
  databaseURL: 'https://react-slack-app-f981e-default-rtdb.firebaseio.com/',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase

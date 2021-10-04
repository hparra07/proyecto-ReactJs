import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBuEea6p4YcNbP1WHQR4cuecZqvfeI-HBg",
  authDomain: "proyecto-reactjs-f803f.firebaseapp.com",
  projectId: "proyecto-reactjs-f803f",
  storageBucket: "proyecto-reactjs-f803f.appspot.com",
  messagingSenderId: "63784417103",
  appId: "1:63784417103:web:93255f4a7ce62219bdf73a"
};


const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)
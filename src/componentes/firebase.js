import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkgyl2Ws8VuPxOWXFiyZQWuv4GW0LSoP4",
  authDomain: "tienda-react-16925.firebaseapp.com",
  projectId: "tienda-react-16925",
  storageBucket: "tienda-react-16925.appspot.com",
  messagingSenderId: "31933447680",
  appId: "1:31933447680:web:54f347fb57116e0ee462e5"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)
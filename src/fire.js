import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyDHT8stWmZ6DFgvASVwQE-dyTXhQaaz85Q",
  authDomain: "apkidukanweb.firebaseapp.com",
  projectId: "apkidukanweb",
  storageBucket: "apkidukanweb.appspot.com",
  messagingSenderId: "92572186096",
  appId: "1:92572186096:web:474597172efc2e28185935"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire
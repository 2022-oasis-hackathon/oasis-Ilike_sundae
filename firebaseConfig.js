import firebase from "firebase/compat/app";

import "firebase/compat/database";
// import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD42zgfeqUXRH9Afu7YNNdGUIB8o5AnYLo",
    authDomain: "recrops-eb411.firebaseapp.com",
    projectId: "recrops-eb411",
    databaseURL:"https://recrops-eb411-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "recrops-eb411.appspot.com",
    messagingSenderId: "435504874777",
    appId: "1:435504874777:web:3ccd67a19626c40f023188",
    measurementId: "G-XYNJHSX054"
  };

//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()

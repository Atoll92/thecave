import React from 'react';
import Header from '../Header';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBb4lyuCg_sPZ3sWg90Qgh4FDWY_QMce8g",
    authDomain: "the-cave-271e0.firebaseapp.com",
    projectId: "the-cave-271e0",
    storageBucket: "the-cave-271e0.appspot.com",
    messagingSenderId: "1007665486927",
    appId: "1:1007665486927:web:c24958b542ab8de5aade3a"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);


const auth = getAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  console.log("user is in")
} else {
  // No user is signed in.
}



function submit () {
    var animal= document.getElementById("1").value;
    // console.log(user.uid);
    // $("button").click(function() {
    //     var fired_button = $(this).val();
    //     alert(fired_button);
    // });
    const uid = user.uid;

     setDoc(doc(db, "cities"), {
        animal: animal,
        state: "CA",
        country: "USA",
        id: uid,
      });

// const docRef =  addDoc(collection(db, "users"), {
//     animal: animal,
//     user: user.uid
//   });
//   console.log("Document written with on SUBMIT: ", docRef.id);
}
// }


const FourthStep = () => {
    return (
        <div>
            <Header/>
            <div className='main-container'>
            <div id="second_step">
        <h2>
        You will soon be matched with a random but welcoming tribe !</h2>
        <p>You will receive an invitation link by mail</p>
        <Link to="/dashboard">
        <button >Go back to dashboard</button>
       
        </Link>
      </div> 
      </div>
        </div>
    );
};

export default FourthStep;
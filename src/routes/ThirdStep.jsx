import React from 'react';
import Header from '../Header';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";



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
  const uid = user.uid;
  console.log("user is in 3")
  console.log(user.uid)
} else {
  // No user is signed in.
}



function submit () {
    var animal= document.getElementById("1").value;
    console.log("bumitted2");
    // $("button").click(function() {
    //     var fired_button = $(this).val();
    //     alert(fired_button);
    // });

const docRef =  addDoc(collection(db, "users"), {
    animal: animal,
    user: user.uid
  });
  console.log("Document written with on SUBMIT on third step: ", docRef.id);

}


const ThirdStep = () => {
    return (
        <div>
            <Header/>
            <div className='main-container'>
            <div className="team" id="second_step">
        <h2>
        Are you on your own or are you already part of a tribe ?</h2>
       <div onClick={submit} class="buttons-entity">
        {/* <button id="1" type="submit" value="human" ><img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/kisscc0-cave-painting-rock-art-rock-art-saharan-antelope-5b3e85716eee09.4176039315308240494544.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/cRbQhp01.svg"/></button> */}
        <Link to="/fourth_step"><button ><img src="https://doublegeste.com/TheCave/media/PngItem_452885.svg"/></button></Link>
        
        <Link to="/register_tribe"><button ><img src="https://doublegeste.com/TheCave/media/662fcfe785a97ab5928ca2f641c4dd05.svg"/></button></Link>
        </div>
        
      </div> 
      </div>
        </div>
    );
};

export default ThirdStep;
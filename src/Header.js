import React from 'react';
import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from 'firebase/auth';

const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const user = auth.currentUser;
// const auth = getAuth();

function showheader() {
    document.getElementById("account_buttons").style.display = "block"
    document.getElementById("tribe_button").style.display = "block"
    document.getElementById("art_button").style.display = "block"
}
function hideheader() {
    document.getElementById("account_buttons").style.display = "none"
    document.getElementById("tribe_button").style.display = "none"
    document.getElementById("art_button").style.display = "none"
}


onAuthStateChanged(auth, (user) => {
    if (user) {

        document.getElementById("account_buttons").style.display = "block"
        document.getElementById("tribe_button").style.display = "block"
        document.getElementById("art_button").style.display = "block"

        // showheader();
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User logged in header")
      console.log(user.uid)

     

     


      // ...
    } else {

        // hideheader();
      // User is signed out
  console.log("User logged out")
  document.getElementById("account_buttons").style.display = "none"
  document.getElementById("tribe_button").style.display = "none"
  document.getElementById("art_button").style.display = "none"

  
    }
  });


const Header = () => {
    return (
        <div>
            <header id="header">
            <Link to="/"><h1 to="/" class="title">Welcome to The Cave</h1> </Link> 
            <p id="motto">  Have fun! An unlucky day hunting still beats a good day working.</p>
  		<img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/>
          <Link to="/login"><button id="button1" >Log in</button></Link><Link to="/character"><button id="account_buttons">My character</button></Link><Link to="/tribe"><button id="tribe_button"> My tribe</button></Link><Link to="/art"> <button id="art_button"> My art</button></Link>
     
    </header>
        </div>
    );
};

export default Header;
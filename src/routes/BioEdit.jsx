import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';


import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

import { db } from '../firebase';


import { getAuth, onAuthStateChanged } from "firebase/auth";










const auth = getAuth();
const user = auth.currentUser;

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       console.log("User logged in")
//       console.log(user.uid)
//       // ...
//     } else {
//       // User is signed out
//   console.log("User logged out")
  
//     }
//   });


  function submitBio () {
    
    const user = auth.currentUser;
    const UserModelRef = doc(db, "users", (user.uid));
      var userbio = document.getElementById("bio").value;
  
  // Set the "bio" field of the user
   updateDoc(UserModelRef, {
    bio: userbio
  });
  console.log(userbio)
  }
  








const BioEdit = () => {



console.log("userID");

    return (
        <div>
            <Header/>
            <div className='main-container' >
            <div id="first_step">
        <h2>
       Could you tell us more about yourself ? </h2>
       <p>(describe your journey, your dreams, your fears.. (max limit for zozos : 1000 characters))</p>
        <form>

     <textarea type="text" id="bio"></textarea>
     
  </form>
  {/* <button >Submit function</button> */}
  <Link to="/third_step"><button className='form_buttons2' onClick={submitBio} >Submit</button></Link>
      </div> 
      </div>
        </div>
    );
};
// export {username};
export default BioEdit;
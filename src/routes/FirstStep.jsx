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



function submitName () {
    
  const user = auth.currentUser;
  const UserModelRef = doc(db, "users", (user.uid));
  var username= document.getElementById("name").value;

// Set the "capital" field of the city 'DC'
 updateDoc(UserModelRef, {
  username: username
});
console.log(username)
}








const FirstStep = () => {



console.log("userID");

    return (
        <div>
            <Header/>
            <div className='main-container' >
            <div id="first_step">
        <h2>
        Start your adventure by chosing a name :</h2>
        <form>

     <input type="text" id="name" name="fname"/>
     
  </form>
  {/* <button >Submit function</button> */}
  <Link to="/age"><button className="play_buttons2" onClick={submitName} >Submit</button></Link>
      </div> 
      </div>
        </div>
    );
};
// export {username};
export default FirstStep;
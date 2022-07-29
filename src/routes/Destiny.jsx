import React from 'react';
import Header from '../Header';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useRef } from 'react';
import Dice from 'react-dice-roll';
// import DelayLink from 'react-delay-link';


// const firebaseConfig = {
//     apiKey: "AIzaSyBb4lyuCg_sPZ3sWg90Qgh4FDWY_QMce8g",
//     authDomain: "the-cave-271e0.firebaseapp.com",
//     projectId: "the-cave-271e0",
//     storageBucket: "the-cave-271e0.appspot.com",
//     messagingSenderId: "1007665486927",
//     appId: "1:1007665486927:web:c24958b542ab8de5aade3a"
//   };
  
//   // Initialize Firebase
//   const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);

const auth = getAuth();
const user = auth.currentUser;

// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
//   const uid = user.uid;
//   console.log("user is in 3")
//   console.log(user.uid)
// } else {
//   // No user is signed in.
// }



// function submitTribeStatus () {
    
// //   const user = auth.currentUser;
// //   const UserModelRef = doc(db, "users", (user.uid));
// //   var tribe= document.getElementById("button-alone").value;
// //   var tribed= document.getElementById("button-tribed").value;

// //   if(document. getElementById('button-alone').clicked == true)
// // {
// //   updateDoc(UserModelRef, {
// //     tribe_status: tribe
// //   });

// //   console.log("button alone clicked")
// // } 

// // if(document. getElementById('button-tribed').clicked == true)
// // {
// //   updateDoc(UserModelRef, {
// //     tribe_status: tribed
// //   });
// //   console.log("button tribe clicked")

// // }

// // Set the "capital" field of the city 'DC'
// //  updateDoc(UserModelRef, {
// //   tribe_status: tribe
// // });
// // console.log(tribe)

// // function submitTribeStatus() {
// //   alert(event.target.id);
// // }

// }




const Destiny = () => {
  // const ref = useRef(null);
  // const user = auth.currentUser;
    // const UserModelRef = doc(db, "users", (user.uid));

    function SubmitDestiny (value) {
      // const navigate = useNavigate();
      const user = auth.currentUser;
      const UserModelRef = doc(db, "users", (user.uid));
      // var destiny= document.getElementById("name").value;

      updateDoc(UserModelRef, {
        destiny: value
      });
      console.log(value)
      // navigate("/third_step")
      
      }
    
    // Set the "capital" field of the city 'DC'
     
   
    

    return (
        <div>
            <Header/>
            <div className='main-container'>
            <div  id="gender">
        <h2>
        Now roll a dice to seal your destiny</h2>
       <div  class="buttons-entity">
        {/* <button id="1" type="submit" value="human" ><img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/kisscc0-cave-painting-rock-art-rock-art-saharan-antelope-5b3e85716eee09.4176039315308240494544.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/cRbQhp01.svg"/></button> */}
        <Link  to="/third_step"> <Dice sound="https://doublegeste.com/TheCave/media/mystic.wav" onRoll={(value) =>  SubmitDestiny (value)} /></Link>
        </div>
        {/* <button className='form_buttons2' >Submit</button> */}
      </div> 
      </div>
        </div>
    );
};

export default Destiny;
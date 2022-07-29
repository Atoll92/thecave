import React from 'react';
import Header from '../Header';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useRef } from 'react';


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




const Gender = () => {
  // const ref = useRef(null);
  const user = auth.currentUser;
    const UserModelRef = doc(db, "users", (user.uid));

  const submitGender = event => {
    updateDoc(UserModelRef, {
        gender: event.currentTarget.id
      });

    console.log(event.currentTarget.id);


    
  };

    return (
        <div>
            <Header/>
            <div className='main-container'>
            <div  id="gender">
        <h2>
        What is your gender ?</h2>
       <div  class="buttons-entity">
        {/* <button id="1" type="submit" value="human" ><img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/kisscc0-cave-painting-rock-art-rock-art-saharan-antelope-5b3e85716eee09.4176039315308240494544.svg"/></button><button><img src="https://doublegeste.com/TheCave/media/cRbQhp01.svg"/></button> */}
        <Link to="/firstep"><button onClick={submitGender} id="female" ><img src="https://doublegeste.com/TheCave/media/venus.jpg"/></button></Link>
        
        <Link to="/firstep"><button onClick={submitGender} id="male"   ><img src="https://doublegeste.com/TheCave/media/homme.jpg"/></button></Link>
        </div>
        
      </div> 
      </div>
        </div>
    );
};

export default Gender;
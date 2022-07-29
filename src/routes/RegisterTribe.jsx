import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
import { setDoc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
// import {  db, logout } from "./firebase";
// import { auth, signInWithGoogle } from "./firebase";
// import { Auth } from 'firebase/auth';
import { db } from '../firebase';
// import { logout } from '../firebase';

import { getAuth, onAuthStateChanged } from "firebase/auth";





// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
// } else {
//   // No user is signed in.
// }

const firebaseConfig = {
    apiKey: "AIzaSyBb4lyuCg_sPZ3sWg90Qgh4FDWY_QMce8g",
    authDomain: "the-cave-271e0.firebaseapp.com",
    projectId: "the-cave-271e0",
    storageBucket: "the-cave-271e0.appspot.com",
    messagingSenderId: "1007665486927",
    appId: "1:1007665486927:web:c24958b542ab8de5aade3a"
  };
  
//   Initialize Firebase
  const firebase = initializeApp(firebaseConfig);





// const firebaseConfig = {
//     apiKey: "AIzaSyBb4lyuCg_sPZ3sWg90Qgh4FDWY_QMce8g",
//     authDomain: "the-cave-271e0.firebaseapp.com",
//     projectId: "the-cave-271e0",
//     storageBucket: "the-cave-271e0.appspot.com",
//     messagingSenderId: "1007665486927",
//     appId: "1:1007665486927:web:c24958b542ab8de5aade3a"
//   };
  
// //   Initialize Firebase
//   const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);

// async function getUser() {
//     const ref = doc(db, "users", FirebaseAuth.instance.currentUser.uid);
//     const userDoc = await getDoc(ref);
//     return userDoc.data();
    
//   }
//   console.log("getUser Succeed");
//   getUser();
const auth = getAuth();
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User logged in")
      console.log(user.uid)
      // ...
    } else {
      // User is signed out
  console.log("User logged out")
  
    }
  });

// function submit () {
    
//     const user = auth.currentUser;
//     const username = name;
//     var name= document.getElementById("name").value;
//     const uid = user.uid;
// const docRef =  setDoc(collection(db, "profils"), {
//     first: name,
//     last: "arthurr",
//     born: 1992,
//     username: user.uid
//   });
//   console.log("Document written with on SUBMIT: ", docRef.id);
//   console.log(docRef.uid)
// // fetchUserName();

// }





// const fetchUserName = async () => {
//     try {
//         var name= document.getElementById("name").value;
//       const q = query(collection(db, "users"), where("name", "==", user?.name));
//       const doc = await getDocs(q);
//       const data = doc.docs[0].data();
//       setName(data.name);
//     } catch (err) {
//       console.error(err);
//       alert("An error occured while fetching user data");
//     }
//   };


const RegisterTribe = () => {

//     const [user, loading, error] = useAuthState(auth);
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
// const username = document.getElementById("name").value;

// let userID = Auth.auth().currentUser?.uid



function submitTribeName() {

  const user = auth.currentUser;
const UserModelRef = doc(db, "users", (user.uid));
var tribe_name_value = document.getElementById("tribe_name").value;

// Set the "capital" field of the city 'DC'
updateDoc(UserModelRef, {
tribe_name: tribe_name_value
});

console.log("userID");
}

    return (
        <div>
            <Header/>
            <div className='main-container' >
            <div id="first_step">
        <h2>
        What is the name of your tribe ?</h2>
        <form>

     <input type="text" id="tribe_name" name="fname"/>
     
  </form>
  {/* <button >Submit function</button> */}
  <Link to="/fourth_step2"><button className='form_buttons2' onClick={submitTribeName} >Submit</button></Link>
      </div> 
      </div>
        </div>
    );
};
// export {username};
export default RegisterTribe;
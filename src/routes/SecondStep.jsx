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
import { updateDoc } from 'firebase/firestore';
import { db } from '../firebase';


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

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  console.log("user is in")
} else {
  // No user is signed in.
}



// function submitEntity () {
    
//   const user = auth.currentUser;
//   const UserModelRef = doc(db, "users", (user.uid));
//   var animal= document.getElementById("1").value;

// // Set the "capital" field of the city 'DC'
//  updateDoc(UserModelRef, {
//   entity: animal
// });
// console.log(animal)
// }




const SecondStep = () => {

  const user = auth.currentUser;

  const UserModelRef = doc(db, "users", (user.uid));

  const submitSpiritAnimal = event => {
    updateDoc(UserModelRef, {
        spirit_animal: event.currentTarget.id
      });
      console.log(event.currentTarget.id);
    }
 

    return (
        <div>
            <Header/>
            <div className='main-container'>
            <div id="second_step">
        <h2>
        Choose your spirit animal :</h2>
        <Link to="/upload_pic"><div class="buttons-entity">
        {/* <button id="1" type="submit" value="human" ><img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/></button> */}
        <button onClick={submitSpiritAnimal}  id="cave_bear"><img src="https://doublegeste.com/TheCave/media/bear.jpg"/></button>
        <button  onClick={submitSpiritAnimal} id="cave_lion"><img src="https://doublegeste.com/TheCave/media/lion-cave.jpg"/></button>
        <button onClick={submitSpiritAnimal}  id="wolf"><img src="https://doublegeste.com/TheCave/media/wolf.jpg"/></button>
        
        <button onClick={submitSpiritAnimal}  id="hyena" ><img src="https://doublegeste.com/TheCave/media/hyenas.webp"/></button>
        
        <button onClick={submitSpiritAnimal}  id="auroch" ><img src="https://doublegeste.com/TheCave/media/auroch.jpg"/></button>
        <button onClick={submitSpiritAnimal}  id="mammoth" ><img src="https://doublegeste.com/TheCave/media/mammoth.jpg"/></button>
       
        <button onClick={submitSpiritAnimal}  id="eagle" ><img src="https://doublegeste.com/TheCave/media/eagle.jpg"/></button>
        <button onClick={submitSpiritAnimal}  id="tiger" ><img src="https://doublegeste.com/TheCave/media/tiger.jpeg"/></button>
        </div>

        </Link>
        <div className='entity-info'>
          <p>Cave bear</p>
          <p>Cave lion</p>
          <p>Dire wolf</p>
          <p>Pachycrocuta</p>
          
          <p>Auroch</p>
          <p>Wolly mammoth</p>
          <p>Crowned eagle</p>
          <p>Saber tooth tiger</p>
         
        </div>
      </div> 
      </div>
        </div>
    );
};

export default SecondStep;
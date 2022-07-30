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




const Tools = () => {

  const user = auth.currentUser;

  const UserModelRef = doc(db, "users", (user.uid));

  const submitTools = event => {
    updateDoc(UserModelRef, {
        initial_tool: event.currentTarget.id
      });
      console.log(event.currentTarget.id);
    }
 

    return (
        <div>
            <Header/>
            <div className='main-container'>
            <div id="tools">
        <h2>
        One last thing, choose one tool you want to start with :</h2>
        <Link to="/character">
        <div class="buttons-entity">
        {/* <button id="1" type="submit" value="human" ><img src="https://doublegeste.com/TheCave/media/BushmanPainting8.svg"/></button> */}
        <button onClick={submitTools}  id="spear"><img src="https://doublegeste.com/TheCave/media/spear.png"/><p>Spear</p></button>
        <button  onClick={submitTools} id="racloir"><img src="https://doublegeste.com/TheCave/media/racloir.jpg"/><p>Racloir</p></button>
        <button onClick={submitTools}  id="sagaie"><img src="https://doublegeste.com/TheCave/media/sagaie.jpeg"/><p>Sagaie</p></button>
        
        <button onClick={submitTools}  id="retouchoir" ><img src="https://doublegeste.com/TheCave/media/retouchoir.jpg"/><p>Retouchoir</p></button>
        
        <button onClick={submitTools}  id="baton percé" ><img src="https://doublegeste.com/TheCave/media/baton-perce.jpg"/><p>Baton percé</p></button>
        </div>
        <div class="buttons-entity">
        <button onClick={submitTools}  id="broyeur de couleurs" ><img src="https://doublegeste.com/TheCave/media/broyeur.jpg"/><p>Broyeur de couleurs</p></button>
        <button onClick={submitTools}  id="Bow trap" ><img src="https://doublegeste.com/TheCave/media/bowtrap.png"/><p>Bow trap</p></button>

        <button onClick={submitTools}  id="fish hooks" ><img src="https://doublegeste.com/TheCave/media/hameçon.jpg"/><p>Fish hooks</p></button>
        <button onClick={submitTools}  id="Bow" ><img src="https://doublegeste.com/TheCave/media/bow.jpg"/><p>Bow</p></button>
        <button onClick={submitTools}  id="Axe" ><img src="https://doublegeste.com/TheCave/media/axe.jpg"/><p>Hache</p></button>

        </div>
        </Link>

        {/* <button className="play_buttons2">Go to your character's page</button>  */}
        {/* <div className='entity-info'>
          <p>Cave bear</p>
          <p>Cave lion</p>
          <p>Dire wolf</p>
          <p>Pachycrocuta</p>
          
          <p>Auroch</p>
          <p>Wolly mammoth</p>
          <p>Crowned eagle</p>
          <p>Saber tooth tiger</p>
         
        </div> */}
      </div> 
      </div>
        </div>
    );
};

export default Tools;
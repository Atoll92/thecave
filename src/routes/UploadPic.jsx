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
import { uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';


import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

import { db } from '../firebase';
import { updateProfile } from 'firebase/auth';

import { getAuth } from "firebase/auth";

import { getStorage, ref} from "firebase/storage";
import {useState} from 'react';




// 'file' comes from the Blob or File API
// uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// });
// // Create a root reference
const storage = getStorage();

// const storageRef = ref(storage, 'some-child');


// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 











const auth = getAuth();
const user = auth.currentUser;
// const uid = user.uid;

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
      
//       console.log("User logged in")
//       console.log(user.uid)
//       // ...
//     } else {
//       // User is signed out
//   console.log("User logged out")
  
//     }
//   });




// updateProfile(auth.currentUser, {
//  displayName: "" ,photoURL: `gs://the-cave-271e0.appspot.com/images/${user.uid}`
// }).then(() => {
//   // Profile updated!
//   // ...
//   console.log(user.photoURL)
// }).catch((error) => {
//   // An error occurred
//   // ...
// });




// function submitPicUrl () {
    
//   const user = auth.currentUser;
//   const UserModelRef = doc(db, "users", (user.uid));
//   var username= document.getElementById("name").value;

// // Set the "capital" field of the city 'DC'
//  updateDoc(UserModelRef, {
//   username: username
// });
// console.log(username)
// }





const UploadPic = () => {

    const auth = getAuth();

    const [imageUpload , setImageUpload] = useState(null)
    const user = auth.currentUser;
    const uploadImage = () => {
    
        if(imageUpload == null) return;
        const imageRef = ref(storage, `/images/${user.uid}`);
        uploadBytes(imageRef, imageUpload).then (() =>  {
            alert("image uploaded !");
          
          
           
    
        });
        
    }
    



console.log("userID");

    return (
        <div>
            <Header/>
            <div className='main-container' >
            <div id="first_step">
        <h2>
        Upload a pic of your choice :</h2>
        

     <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
     
 <button onClick={uploadImage}> Upload Pic</button>
  {/* <button >Submit function</button> */}
  <Link to="/bio_select"><button className="play_buttons2"  >Submit</button></Link>
      </div> 
      </div>
        </div>
    );
};
// export {username};
export default UploadPic;
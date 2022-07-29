import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage';
import firebase from '../firebase';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { query, collection, getDocs, where } from "firebase/firestore";
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import "../character.css";



// const  = doc(db, "cities", "SF");
// const app = initializeApp(firebaseConfig);
const auth = getAuth();

// const auth = getAuth();


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User logged in character")
      console.log(user.uid)

     

     


      // ...
    } else {
      // User is signed out
  console.log("User logged out")

  
    }
  });

  const storage = getStorage();

  const user = auth.currentUser;



async function getuserInfo () {



    const auth = getAuth();

const user = auth.currentUser;
 
    const UserModelRef = doc(db, "users", (user.uid));
    const docSnap =  await getDoc(UserModelRef);
    

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const data = docSnap.data();
  console.log(data.entity);

  getDownloadURL(ref(storage, `images/${user.uid}`))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

  
    // Or inserted into an <img> element
    const img = document.getElementById('profile_pic');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });



//   return {[data]}
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}



}


// function showPicture() {

// const storage = getStorage();
// const user = auth.currentUser;
// const auth = getAuth(firebase);

// getDownloadURL(ref(storage, `/images/${user.uid}`))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

 

//     // Or inserted into an <img> element
//     const img = document.getElementById('profile_pic');
//     img.setAttribute('src', url);
//     console.log(url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });


// }




  function Character () {
    // const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const [bio, setBio] = useState("");
    const fetchBio = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setBio(data.bio);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    const [username, setUsername] = useState("");
    const fetchUsername = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setUsername(data.username);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    // useEffect(() => {
    //   // if (loading) return;
    //   // if (!user) return navigate("/");
    //   
    // }, [user]);

    
  
// showPicture();
fetchBio();
fetchUsername();
    getuserInfo();
 
    // var username = user.username;
    // const UserModelRef = doc(db, "users", (user.uid));
    // const docSnap =   getDoc(UserModelRef);
    // const data = docSnap.data();
    // const entity = data.entity;
    
    

    return (
        <div>
            <Header/>
            <div id="character">
        <h2 className='page-title'>
        My character's page</h2>
        <div id="player-info">
        <img id="profile_pic" src="" />
       <p>{username}</p> 
        <h3>Bio</h3>
        <p>{bio}</p>

        <p>{user.email}</p>
        
        <p>{user.photoURL}</p>
        <p>{user.tribe_status}</p>

        </div>
        
        
        
        {/* <img className="profile_pic" src={"gs://the-cave-271e0.appspot.com/images/$ user.uid}/> */}
        
      
        <Link to="/huntprep">Prepare for the hunt</Link>
        
      </div> 
        </div>
    );
};

export default Character;
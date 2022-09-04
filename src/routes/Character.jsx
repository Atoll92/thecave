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

import RetouchoirImg from '../media/retouchoir.jpg'
import axeImg from '../media/axe.jpg'
import racloirImg from '../media/racloir.jpg'
import broyeurImg from '../media/broyeur.jpg'
import batonImg from '../media/baton-perce.jpg'
import spearImg from '../media/spear.png'
import sagaieImg from '../media/sagaie.jpeg'
import fish_hooksImg from '../media/hameçon.jpg'
import bowImg from '../media/bow.jpg'


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

    const [spirit_animal, setSpiritAnimal] = useState("");
    const fetchSpiritAnimal = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setSpiritAnimal(data.spirit_animal);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const [tribe_status, setTribeStatus] = useState("");
    const fetchTribe_status = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setTribeStatus(data.tribe_status);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const [tribe_name, setTribeName] = useState("");
    const fetchTribeName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setTribeName(data.tribe_name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const [gender, setGender] = useState("");
    const fetchGender = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setGender(data.gender);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const [age, setAge] = useState("");
    const fetchAge = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setAge(data.age);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };


    const [destiny, setDestiny] = useState("");
    const fetchDestiny = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setDestiny(data.destiny);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const [initial_tool, setInitialTool] = useState("");
    const fetchInitialTool = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setInitialTool(data.initial_tool);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    const [initial_weapon, setInitialWeapon] = useState("");
    const fetchInitialWeapon = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setInitialWeapon(data.initial_weapon);
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
fetchAge();
fetchUsername();
fetchSpiritAnimal();
fetchTribe_status();
fetchTribeName();
fetchGender();
fetchDestiny();
    getuserInfo();
    fetchInitialTool();
    fetchInitialWeapon();
 
    // var username = user.username;
    // const UserModelRef = doc(db, "users", (user.uid));
    // const docSnap =   getDoc(UserModelRef);
    // const data = docSnap.data();
    // const entity = data.entity;
    
    let tool_imageURL = "";
  if (initial_tool == "retouchoir")
  tool_imageURL = RetouchoirImg;
 if (initial_tool == "axe")
 tool_imageURL = axeImg;
  console.log("initial tool" + initial_tool)

  if (initial_tool == "racloir")
  tool_imageURL = racloirImg;

  if (initial_tool == "broyeur de couleurs")
  tool_imageURL = broyeurImg;

  if (initial_tool == "baton percé")
  tool_imageURL = batonImg;


  let weapon_imageURL = "";
  if (initial_weapon == "spear")
  weapon_imageURL = spearImg;
 if (initial_weapon == "sagaie")
 weapon_imageURL = sagaieImg;
  console.log("initial weapon" + initial_weapon)

  if (initial_weapon == "Bow")
  weapon_imageURL = bowImg;

  if (initial_weapon == "fish hooks")
  weapon_imageURL = fish_hooksImg;

  if (initial_weapon == "baton percé")
  weapon_imageURL = batonImg;





    return (
        <div>
            <Header/>
            <div id="character">
        <h2 className='page-title'>
        My character's page</h2>
        <div id="player-info">
          <div id="picname">
        <img id="profile_pic" src="" />
       <p id="username">{username}</p> 
       </div>
       <div id="player_row">
        
        
        {/* <img className="profile_pic" src={"gs://the-cave-271e0.appspot.com/images/$ user.uid}/> */}
        <Link to="/huntprep"><button className='play_buttons2'>Get ready for hunting !</button></Link>
        {/* <Link to="/huntprep"><button>Go to the cave</button></Link> */}
        <Link to="/huntprep" ><button className='play_buttons2'>Reach out to your local shaman</button></Link>
        <Link to="/huntprep"><button className='play_buttons2'>Summon a meeting</button></Link>
        {/* <Link to="/huntprep"><button>Go to the cave</button></Link> */}
        <Link to="/ritual" ><button className='play_buttons2'>Perform a ritual</button></Link>
      
       
        </div>
       <div id="subcontainer">
       <div id="subinfos">
       <h3>Personality</h3>
       <p><strong>Gender : </strong> {gender}</p>
       <p><strong>Age : </strong>{age}</p>
        <p><strong>Biography : </strong>{bio}</p>

        {/* <p>{user.email}</p> */}
        
        <p><strong>Spirit animal : </strong> {spirit_animal}</p>
        <p><strong>Destiny trait : </strong> {destiny}</p>
        {/* <p><strong>Master tool : </strong> {initial_tool}</p> */}
        <p><strong>tribe status : </strong>{tribe_status}</p>
        <p><strong>Tribe's name : </strong> {tribe_name}</p>
        
        </div>
        <div id="subinfos">
          <h3>Inventory</h3>
          <p><strong>{initial_tool}</strong> </p>
          <img src={tool_imageURL}/>
          <p><strong>{initial_weapon}</strong> </p>
          <img src={weapon_imageURL}/>
        </div>
        </div>

        </div>
        
      
      </div> 

        </div>
    );
};

export default Character;
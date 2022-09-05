import React from 'react';
import Header from '../Header';
import { useState } from 'react';
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User logged in tribe")
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


const Tribe = () => {
    // const auth = getAuth();
    const user = auth.currentUser;

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

    fetchUsername();
    getuserInfo();
    console.log(username)


    return (
        <div>
            <Header/>
            <div id="mytribe">
        <h2>
        My tribe status</h2>
        <div id="picname">
        <img id="profile_pic" src="" />
       <p id="username">{username}</p> 
       </div>
        
      </div> 
        </div>
    );
};

export default Tribe;
import React from 'react'
import { Link } from 'react-router-dom'



function HuntPrep() {
  return (
    <div><h1>Work in progress ! </h1>
    <h2>Coming very soon, before the end of mesolithic period...  I hope !</h2>
    <Link to="/huntv2">Primitive Hunt</Link></div>
  )
}

export default HuntPrep
// import { getAuth } from 'firebase/auth';

// import { doc, setDoc } from "firebase/firestore"; 


// import { updateDoc } from 'firebase/firestore';

// import '../huntprep.css';
// import { db } from '../firebase';

 

// const auth = getAuth();
// const user = auth.currentUser;


// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
//   console.log("user is in playground")
//   console.log(user)
// } else {
//   console.log("pb de login")
// }



// function submitBio () {
    
//   // const user = auth.currentUser;
//   const UserModelRef = doc(db, "users", (user.uid));
//     var userbio = document.getElementById("5").value;

// // Set the "capital" field of the city 'DC'
//  updateDoc(UserModelRef, {
//   bio: userbio
// });
// console.log(userbio)
// }

  







// function HuntPrep() {

  

//     // var name= document.getElementById("5").value;
//     // const user = auth.currentUser;
//   return (
//    <div className='huntprep'>
//     <div className='sidebar'>

//         <p>{user.displayName}</p>
//         <p>{user.uid}</p>
       
//         <input id="5" type="text"></input>
//         <button onClick={submitBio} > </button>
       

//     </div>
//     <div className='playground'>

//     </div>
//    </div>
//   )
// }

// export default HuntPrep
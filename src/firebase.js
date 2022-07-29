import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
     signOut,
   } from "firebase/auth";
   import {
    getFirestore,
     query,
   getDocs,
     collection,
    where,
     addDoc,
     setDoc,
     doc,
   } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBb4lyuCg_sPZ3sWg90Qgh4FDWY_QMce8g",
    authDomain: "the-cave-271e0.firebaseapp.com",
    projectId: "the-cave-271e0",
    storageBucket: "the-cave-271e0.appspot.com",
    messagingSenderId: "1007665486927",
    appId: "1:1007665486927:web:c24958b542ab8de5aade3a"
  };

  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);
  const db = getFirestore(firebase);

  export default firebase;


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", (user.uid) ), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
//       const docRef = doc(app, "users", user.uid)
// await setDoc(docRef, {
//   firstName: fname.value,
//   lastName: lname.value,
//   email: email.value,
//   age: 0,
//   bday: "",
// });
      await setDoc(doc(db, "users", (user.uid) ), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    
    firebaseConfig,
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };


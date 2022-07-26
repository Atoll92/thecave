import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';



import {BrowserRouter, Routes, Route,} from "react-router-dom";

// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
import FirstStep from './routes/FirstStep';
import SecondStep from './routes/SecondStep';
import Character from './routes/Character';
import Tribe from './routes/Tribe';
import Art from './routes/Art';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard';
import ThirdStep from './routes/ThirdStep';
import RegisterTribe from './routes/RegisterTribe';
import FourthStep from './routes/FourthStep';
import FourthStep2 from './routes/FourthStep2';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb4lyuCg_sPZ3sWg90Qgh4FDWY_QMce8g",
  authDomain: "the-cave-271e0.firebaseapp.com",
  projectId: "the-cave-271e0",
  storageBucket: "the-cave-271e0.appspot.com",
  messagingSenderId: "1007665486927",
  appId: "1:1007665486927:web:c24958b542ab8de5aade3a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase);

export default firebase;





 
  const docRef =  addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
//  catch (e) {
//   console.error("Error adding document: ", e);
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  // <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<App />} />
     
      <Route path="firstep" element={<FirstStep />} />
      <Route path="secondstep" element={<SecondStep />} />
      <Route path="third_step" element={<ThirdStep />} />
      <Route path="character" element={<Character />} />
      <Route path="tribe" element={<Tribe />} />
      <Route path="art" element={<Art />} />
      <Route path="register_tribe" element={<RegisterTribe />} />
      <Route path="fourth_step" element={<FourthStep />} />
      <Route path="fourth_step2" element={<FourthStep2 />} />
   
    </Routes>
    
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

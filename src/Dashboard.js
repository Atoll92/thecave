import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Header from "./Header";
import "./App.css";
import ReactPlayer from 'react-player';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
   
    <div >
         <Header/>
       <div className="main-container" >
       <video loop autoPlay muted>
        <source
          src="https://doublegeste.com/TheCave/media/chauvet.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
     
        <div className="UserInfo">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
         </div>
         <Link to="/gender"><button className="play_buttons">Play</button></Link>
       </div>
       
     </div>
  );
}
export default Dashboard;
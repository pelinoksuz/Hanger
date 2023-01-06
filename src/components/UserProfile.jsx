import React, { useContext, useState,useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
import Eventform from "./Eventform"
import { doc, onSnapshot } from "firebase/firestore"; 
import { db } from "../Firebase";

const UserProfile = () => {
  const [myevent,setmyevents] = useState("");
  const { currentUser } = useContext(AuthContext);

  const [popup, setPopup] = useState('close');

  const [name, setname] = useState("Tennis");
  const [location, setlocation] = useState("Tennis Club Atasehir");
  
  const [desc, setdesc] = useState("");
  const open = () =>{
    switch(popup){
      case "close":
        setPopup("open");
        return;
      case "open":
        setPopup("close");
        return;
      default:
        setPopup("close");
        return;
    };
  };

  useEffect(() => {
    const getEvents = () => {
      const unsub = onSnapshot(doc(db, "events", currentUser.uid), (doc) => {
        setmyevents(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getEvents();
  }, [currentUser.uid]);

  console.log(myevent);
  return (
    <div className="sidebar_p">
      <div className="navbar_p">
        <div className="user_p">
          <img src={currentUser.photoURL} alt="" />
          
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
      <div className="navbar_p">
        <div className="user_p">
        <h1 className="logo_p">{currentUser.displayName}</h1>
        </div>
      </div>
      <div className="navbar_p">
        <div className="user_p">
          <h2 className="logo_p">Biography</h2>
        </div>
      </div>


      <button onClick={(e) => open()}>Create new event</button>
      <Eventform somepop ={popup}/>

      <div className="events">
        <h3 className="logo_p">Your Event List:</h3>
        {myevent.events&&myevent.events.map((item,key)=><span key={key}>
          
          <span className="event">Event Name : {myevent.events[key].name}</span>
          <span className="event">Location : {myevent.events[key].location}</span>
          <span className="event">Desc : {myevent.events[key].description}</span>
          <span className="event">Date : {myevent.events[key].date}</span>
        </span>
        )}
      
      
    </div>
    </div>
  );
};

export default UserProfile;
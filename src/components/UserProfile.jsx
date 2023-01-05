import React, { useContext, useState,useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
import Eventform from "./Eventform"
import { doc, onSnapshot } from "firebase/firestore";

const UserProfile = () => {
  const [myevent,setmyevents] = useState("");
  const { currentUser } = useContext(AuthContext);

  const [popup, setPopup] = useState('close');
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
    <div className="sidebar">
      <div className="navbar">
        <div className="user">
          <img src={currentUser.photoURL} alt="" />
          <h1 className="logo">{currentUser.displayName}</h1>
        </div>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>

      <div className="navbar">
        <div className="user">
          <h2 className="logo">Biography</h2>
        </div>
      </div>

      <div className="navbar">
        <div className="user">
          <h3 className="logo">Hobbies:</h3>
        </div>
        
      </div>
      <button onClick={(e) => open()}>Create new event</button>
      <Eventform somepop ={popup}/>

      <div className="chats">
      {Object.entries(myevent)?.sort((a,b)=>b[1].date - a[1].date).map((event) => (
        <div
          className="userChat"
          key={myevent}>
          <span>Event:  </span>
          <span>{myevent.name }</span>
          <span>|    Location: </span>
          <span>{myevent.location }</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default UserProfile;
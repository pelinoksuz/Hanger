import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
import MyEvents from "./MyEvents";

const Bio = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
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
      <button>Create new event</button>
      <div>
        
      </div>

      <div>
        <MyEvents />

      </div>
    </div>
  );
};

export default Bio;

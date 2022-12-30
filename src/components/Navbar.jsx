import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar">
        <span className="logo">Hanger Chat</span>
        <div className="user">
          <nav>
            <a href="/profile">
              <img src={currentUser.photoURL} alt="" />
            </a>
          </nav>
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)}>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

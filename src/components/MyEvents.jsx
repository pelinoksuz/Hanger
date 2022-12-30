import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";

const MyEvents = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='userChat'>
        <img src ='' alt=''></img>
        <div className='userChatInfo'>
          <span>Tennis Date 02:00 pm 02/01/2023</span>
          <p>Batı, Barbaros Mah, Lale Sk., 34746 Ataşehir/İstanbul</p>
        </div>
      </div>
  );
};

export default MyEvents;

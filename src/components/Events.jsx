import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Events = ({ myevent }) => {

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [myevent]);

  return (
    <div
      ref={ref}
    >

      <div className="messageContent">
        <p>{myevent.name}</p>
        
      </div>
    </div>
  );
};

export default Events;

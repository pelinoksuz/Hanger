import React, { useContext, useState, useEffect } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { db, storage } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
import { ref } from "firebase/storage";

const Eventform = (props) => {
  console.log(props.somepop);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [events, setevents] = useState("");
  const [description, setdescription] = useState("");

  const { currentUser } = useContext(AuthContext);

  const [myeventsarray, setmyeventsarray] = useState([]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name} \n`+`The location you entered was: ${location}\n`+`The date you entered was: ${date}\n`+`The name you entered was: ${events} \n`)

      await updateDoc(doc(db, "events", currentUser.uid), {
        events: arrayUnion({
            uid: currentUser.uid,
            name: name,
            location: location,
            date: date,
            events: events,
            description: description
        }),
      });
    
  };


  return (
    <>
      {props.somepop === "open" ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} placeholder="Enter your event name:" onChange={(e) => setName(e.target.value)}/>
          <input type="text" value={location} placeholder="Enter your event location:" onChange={(e) => setlocation(e.target.value)}/>
          <input type="text" value={description} placeholder="Enter your event description:" onChange={(e) => setdescription(e.target.value)}/>
          <input type="date" value={date} placeholder="Enter your event date" onChange={(e) => setdate(e.target.value)}/>
          <select value={events} id="events" onChange={(e) => setevents(e.target.value)}>
            <option value="sport">sport</option>
            <option value="party">party</option>
            <option value="entertainment">entertainment</option>
            <option value="game">game</option>
          </select>
        <input className="submit" type="submit" />
      </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Eventform;

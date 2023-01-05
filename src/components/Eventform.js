import React, { useContext, useState } from "react";
import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
const Eventform = (props) => {
  console.log(props.somepop);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [events, setevents] = useState("");

  const { currentUser } = useContext(AuthContext);


  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name} \n`+`The location you entered was: ${location}\n`+`The date you entered was: ${date}\n`+`The name you entered was: ${events} \n`)
    
    await updateDoc(doc(db, "events", currentUser.uid), {
        uid: currentUser.uid,
        name: name,
        location: location,
        date: date,
        events: events
      });
    
  };


  return (
    <>
      {props.somepop === "open" ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} placeholder="Enter your event name:" onChange={(e) => setName(e.target.value)}/>
          <input type="text" value={location} placeholder="Enter your event location:" onChange={(e) => setlocation(e.target.value)}/>
          <input type="date" value={date} placeholder="Enter your event date" onChange={(e) => setdate(e.target.value)}/>
          <select value={events} id="events" onChange={(e) => setevents(e.target.value)}>
            <option value="sport">sport</option>
            <option value="party">party</option>
            <option value="entertainment">entertainment</option>
            <option value="game">game</option>
          </select>
        <input type="submit" />
      </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Eventform;

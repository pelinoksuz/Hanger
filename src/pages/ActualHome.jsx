import React from 'react'
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import MediaCard from '../components/EventCard';
import { getDatabase, ref, child, get } from "firebase/database";
import { Button } from 'antd';

const ActualHome = () => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `events/DFbbDbrmJ1RJtxi5uGOLugVTE1E2`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        test = snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    var test = 5;
    const mockEvent = {
    date: "2023-02-08",
    events: "entertainment",
    location: "Akasya Mall",
    name: "Cinema Date2",
    uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis, nunc sit amet mattis pellentesque, dui augue placerat enim, id pellentesque velit est quis justo. Nam aliquet malesuada molestie. Fusce vulputate nibh vitae felis tincidunt, vitae luctus dui luctus. Donec gravida a nibh at venenatis."
    }
    
    const mockUser = {
    displayName: "pelin oksuz",
    email: "pelin.oksuz@gmail.com",
    photoURL: "https://firebasestorage.googleapis.com/v0/b/hang-f9b0f.appspot.com/o/pelin%20oksuz1672324970399?alt=media&token=3c039cc3-9f74-4780-817e-ddad7a566c3d",
    uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2"
    }
    
    return (
        <div className='home'>

            <div className='container'>
                    <MediaCard Event={mockEvent} User={mockUser}/>
                    <MediaCard Event={mockEvent} User={mockUser}/>
                    <MediaCard Event={mockEvent} User={mockUser}/>
                    {test}
                    <Button onClick={dbRef}/>
                    
                    
            </div>


        </div>
    )
}

export default ActualHome;
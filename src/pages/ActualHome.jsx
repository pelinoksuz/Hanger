import React from 'react'
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import MediaCard from '../components/EventCard';
import { getDatabase, ref, child, get } from "firebase/database";
import { Button } from 'antd';
import MUINavbar from '../components/MUINavbar';

const ActualHome = () => {

    const mockEvent = {
    date: "2023-02-14",
    events: "entertainment",
    location: "Dinner",
    name: "Nusr-Et",
    uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2",
    description: "Just looking for someone that enjoys eating meat to go to dinner together. P.S. Everyone pays for their own food"
    }
    
    const mockEvent2 = {
      date: "2023-01-12",
      events: "entertainment",
      location: "Bomonti",
      name: "Babylon",
      uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2",
      description: "I'm going to go to Babylon next week, looking for a friend(s) "
    }
    const mockEvent3 = {
        date: "2023-01-21",
        events: "entertainment",
        location: "TBD",
        name: "My home",
        uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2",
        description: "Looking for people to worship me and relax with some herbal supplements if you know what I mean"
    }
    const mockUser = {
    displayName: "Kaan Suar",
    email: "pelin.oksuz@gmail.com",
    photoURL: "https://media.licdn.com/dms/image/C4D03AQH9-hq6M1toZg/profile-displayphoto-shrink_800_800/0/1650889673969?e=1678320000&v=beta&t=mlikYCkZkKriVU_XCIgeoNSJMMr_4wSuTGRsumoIc_4",
    uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2"
    }
    
    const mockUser2 = {
      displayName: "Pelin Oksuz",
      email: "pelin.oksuz@gmail.com",
      photoURL: "https://i.imgur.com/mziRmNO.png",
      uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2"
    }
    const mockUser3 = {
        displayName: "Elon",
        email: "pelin.oksuz@gmail.com",
        photoURL: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iS8pcZQodP8Y/v1/1200x-1.jpg",
        uid: "DFbbDbrmJ1RJtxi5uGOLugVTE1E2"
    }
    return (
        <div className='home'>
          <div className='navbar-container' >
            <MUINavbar></MUINavbar>
              <div className='container2'>
                      <MediaCard Event={mockEvent} User={mockUser}/>
                      <MediaCard Event={mockEvent2} User={mockUser2}/>
                      <MediaCard Event={mockEvent3} User={mockUser3}/>
                      
              </div>
          </div>
        </div>
    )
}

export default ActualHome;
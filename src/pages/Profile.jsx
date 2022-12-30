import React from 'react'
import UserProfile from '../components/UserProfile';
import Chat from '../components/Chat';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <UserProfile/>
            </div>
        </div>
    )
}

export default Home;
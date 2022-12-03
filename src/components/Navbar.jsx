import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> Hanger Chat</span>
      <div className='user'>
        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt='' />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;
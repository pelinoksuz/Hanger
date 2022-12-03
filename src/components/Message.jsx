import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>

      <div className="messageInfo">
        <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt='' />

        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello </p>
        {/* <img src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt='' /> */}
      </div>
    </div>
  )
}

export default Message;

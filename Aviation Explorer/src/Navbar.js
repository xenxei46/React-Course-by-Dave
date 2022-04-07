import React from 'react'
import './index.css'

const Navbar = () => {
  const pins = {
    id: 1,
    boards: 37,
    pins: '8.9k',
    likes: '186k',
    followers: '8.9k',
    following: '1.8k',
  }
  return (
    <div className='navbar'>
      <nav>
        <span className='pins'>
          {pins.boards}
          <p>Boards</p>
        </span>
        <span className='pins'>
          {pins.pins}
          <p>Pins</p>
        </span>
        <span className='pins'>
          {pins.likes}
          <p>Likes</p>
        </span>
        <span className='pins'>
          {pins.followers}
          <p>Followers</p>
        </span>
        <span className='pins'>
          {pins.following}
          <p>Following</p>
        </span>
      </nav>
    </div>
  )
}

export default Navbar;

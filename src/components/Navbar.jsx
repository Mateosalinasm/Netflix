import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div className="wrapper flex">
        <div className="logo">
          <img
            className="logo h-[4.5rem] ml-10"
            src="/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
          />
        </div>
        <div className="nav-links flex gap-4 pt-7 ml-6 text-white font-light text-sm">
          <Link className='hover:opacity-60' to="#">Home</Link>
          <Link className='hover:opacity-60' to="#">TV Shows</Link>
          <Link className='hover:opacity-60' to="#">Movies</Link>
          <Link className='hover:opacity-60' to="#">New & Popular</Link>
          <Link className='hover:opacity-60' to="#">My List</Link>
          <Link className='hover:opacity-60' to="#">Browse by Languages</Link>
        </div>
      </div>
      <div className="secondary-nav grid grid-cols-3 gap-2 mr-10">
        <img
          className="search-logo invert w-5 pt-8"
          src="/images/magnifying-glass.png"
          alt="search"
        />
        <img
          className="notification-logo invert w-5 pt-8"
          src="/images/notification.png" 
          alt="notification"
        />
        <img
          className="user-icon w-8 mt-6 rounded-md"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
          alt="user"
        />
      </div>
    </nav>
  );
}

export default Navbar

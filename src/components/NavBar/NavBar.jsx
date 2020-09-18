import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
        <nav>
          <div className="nav-wrapper">
      {user ?
            <>
              <a href="/" className="nav-link">Welcome, {user.name}</a>
              <a href="/users" className="nav-link">Users</a>
              <Link to='' className='NavBar-link' onClick={handleLogout}>LOG OUT</Link>
            </>
      :
            <>
              <a href="/login" className="nav-link">Log In</a>
              <a href="/signup" className="nav-link">Sign Up</a>
            </>
      }
          </div>
        </nav>
    </>
  )
}
export default NavBar;
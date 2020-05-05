import React from 'react'

import '../assets/sass/components/Header.scss'

const Header = () => {
  return (
    <header className="Header">
        <figure className="Header__logo-container">
            <img className="Header__logo" src="./img/logo-white.png" alt="Reactivid Logo" width="150px" />
        </figure>
        <nav className="Header__nav">
            <div className="Header__nav-profile">
                <img src="./img/user-icon.svg" alt="Profile Icon" width="50px" />
                <p>Profile</p>
            </div>
            <ul className="Header__nav-menu">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Sign out</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/sass/components/Header.scss'

import logo from '../assets/static/logo-white.png'
import userIcon from '../assets/static/user-icon.svg'

const Header = () => {
  return (
    <header className="Header">
        <figure className="Header__logo-container">
            <Link to="/">
                <img className="Header__logo" src={logo} alt="Reactivid Logo" width="150px" />
            </Link>
        </figure>
        <nav className="Header__nav">
            <div className="Header__nav-profile">
                <img src={userIcon} alt="Profile Icon" width="50px" />
                <p>Profile</p>
            </div>
            <ul className="Header__nav-menu">
                <li><a href="#">Settings</a></li>
                <li><Link to="/login">Log in</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
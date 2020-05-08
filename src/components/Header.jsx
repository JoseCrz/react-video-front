import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import gravatar from '../utils/gravatar'

import logo from '../assets/static/logo-white.png'
import userIcon from '../assets/static/user-icon.svg'

import '../assets/sass/components/Header.scss'

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0

  return (
    <header className="Header">
        <figure className="Header__logo-container">
            <Link to="/">
              <img className="Header__logo" src={logo} alt="Reactivid Logo" />
            </Link>
        </figure>
        <nav className="Header__nav">
            <div className="Header__nav-profile">
              { hasUser
              ? <img src={gravatar(user.email)} className="Header__profile" alt="Profile Icon" />
              : <img src={userIcon} className="Header__profile" alt="Profile Icon" />
              }
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header)
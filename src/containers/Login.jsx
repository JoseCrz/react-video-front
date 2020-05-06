import React from 'react'

import twitterIcon from '../assets/static/twitter-icon.svg'
import googleIcon from '../assets/static/google-icon.svg'

import '../assets/sass/components/Login.scss'

const Login = () => {
  return (
    <section className="Login">
        <div className="Login__container">
            <h1 className="Login__title">Welcome</h1>
            <form action="" className="Login__form">
                <input className="Login__input" type="email" placeholder="User/Email" aria-label="Enter user or email" />
                <input className="Login__input" type="password" placeholder="Password" aria-label="Enter password" />
                <button className="Login__button" aria-label="Login in button">Sign in</button>
                <div className="Login__options">
                    <label className="Login__label" htmlFor="remember">
                        <input id="remember" type="checkbox" value="remember" name="remember" />Remember me
                    </label>
                    <a className="Login__link" href="#">Forgot my password</a>
                </div>
            </form>
            <article className="Login__social">
                <figure className="Login__img-container Login__img-container--icon-text">
                    <img src={googleIcon} alt="Google icon" width="30px" />
                    <a href="#" className="Login__link">Sign in with Google</a>
                </figure>
                <figure className="Login__img-container Login__img-container--icon-text">
                    <img src={twitterIcon} alt="Twitter icon" width="30px" />
                    <a href="#" className="Login__link">Sign in with Twitter</a>
                </figure>
            </article>
            <article className="Login__sign-up">
                <p>Don't have an account? <a className="Login__link Login__link--bold" href="./sign-up.html">Sign up!</a></p>
            </article>
        </div>
    </section>
  )
}

export default Login
import React  from 'react'

import '../assets/sass/components/Login.scss'

const Register = () => {
  return (
    <section className="Login">
        <div className="Login__container Login__container--Login-up">
            <h1 className="Login__title">Don't have an account?</h1>
            <form action="" className="Login__form Login__form--Login-up">
                <input className="Login__input" type="text" placeholder="Username" aria-label="Enter a username" />
                <input className="Login__input" type="email" placeholder="Email" aria-label="Enter an email" />
                <input className="Login__input" type="password" placeholder="Password" aria-label="Enter a password" />
                <button className="Login__button" aria-label="Login up button">Login up</button>
            </form>
            <article className="Login__sign-up">
                <p>Already a member? <a className="Login__link Login__link--bold" href="./sign-in.html">Sign in</a></p>
            </article>
        </div>
    </section>
  )
}

export default Register
import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'


const Header = (props) => {
    return (
    <header>
      <img src="https://it-kamasutra.com/images/tild3137-3939-4833-b730-313332653232__it-kamasutra-logo-on.png" alt="logo"></img>
      <div className = {style.loginBlock}>
        { props.isAuth ? props.login
          : <NavLink to = {'/login'}>Sign In</NavLink>}
      </div>
    </header>
    )
}

export default Header
import React from 'react'
import style from './Nav.module.css'

const Nav = () => {
    return(
        <nav>
        <div className={`${style.item} ${style.active}`}><a href="#">Dashboard</a></div>
        <div className={style.item}><a href="#">Expenses</a></div>
        <div className={style.item}><a href="#">Subscriptions</a></div>
        <div className={style.item}><a href="#">Emploees</a></div>
        <div className={style.item}><a href="#">Payments</a></div>
        <div className={style.item}><a href="#">Requests</a></div>
        <div className={style.item}><a href="#">Cards</a></div>
        <div className={style.item}><a href="#">Settings</a></div>
      </nav>
    )
}

export default Nav;
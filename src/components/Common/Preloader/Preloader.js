import React from 'react'
import styles from '../../Users/Users.module.css'

let Preloader = () => {
    return<div className={styles.ldsRing}>
        <div></div><div></div><div></div><div></div>
    </div>
}

export default Preloader
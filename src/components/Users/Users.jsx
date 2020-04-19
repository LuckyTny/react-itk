import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <img className={styles.photo} src={u.photoUrl} alt=""/>
                <div>
                { u.followed 
                    ? <button onClick={() => { props.follow(u.id)}} >Follow</button> 
                    : <button onClick={() => { props.unfollow(u.id)}} >Unfollow</button> }
                </div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
                
            </div>)
        }
    </div>
}

export default Users
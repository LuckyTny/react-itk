import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'

let Users = (props) => {
    if (props.users.length === 0) {
        debugger;
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            console.log(response)
            props.setUsers(response.data.items)
        })
    }

    return <div> <h2> USER COMPONENT WORKS</h2>
            {/* {{props.users.map( u => <div key={u.id}>
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
        }} */}
    </div>
}

export default Users
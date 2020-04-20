import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'

import avatarHolder from './../../assets/images/Portrait_Placeholder.png'

class Users extends React.Component {
  
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
        
            this.props.setUsers(response.data.items)
        })
    }
  
    render() {
        return <div>
            {this.props.users.map( u => <div key={u.id}>
                <img className={styles.photo} src={u.photos.small != null ? u.photos.small : avatarHolder } alt=""/>
                <div>
                { u.followed 
                    ? <button onClick={() => { this.props.follow(u.id)}} >Follow</button> 
                    : <button onClick={() => { this.props.unfollow(u.id)}} >Unfollow</button> }
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
                
            </div>)
        }
    </div>
    }
}

export default Users
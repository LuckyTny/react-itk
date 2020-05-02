import React from 'react'
import styles from './Users.module.css'
import avatarHolder from './../../assets/images/Portrait_Placeholder.png'
import {NavLink} from 'react-router-dom'



let Users = (props) => {
    debugger;

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for( let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }

    return <div>

            <div>
                {pages.map(p => {
                       return <span className={props.currentPage === p && styles.selectedPage}
                       onClick={ () => {props.onPageChanged(p)} }
                       >{p}</span>
                    })}
            </div>

            {props.users.map( u => <div key={u.id}>
                <NavLink to={ '/profile/' + u.id }>
                <img className={styles.photo} src={u.photos.small != null ? u.photos.small : avatarHolder } alt=""/>
                </NavLink>
                <div>
                { u.followed 
                    ? <button onClick={() => { props.follow(u.id)}} >Unfollow</button> 
                    : <button onClick={() => { props.unfollow(u.id)}} >Follow</button> }
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
                
            </div>)
        }
    </div>
}

export default Users
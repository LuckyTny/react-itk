import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    return(
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div> 
    )
}

let userData = [
    {id: 2314, name:'Gagik'},
    {id: 2315, name:'James'},
    {id: 2316, name:'Richard'},
    {id: 2317, name:'Sukach'},
    {id: 2318, name:'Valera'},
    {id: 2319, name:'Grach'},
    {id: 2321, name:'Natasha'},
]
let messageData = [
    {id: 1, message: 'Whats UP!?'},
    {id: 2, message: 'Where are you'},
    {id: 3, message: 'How is your day going'},
    {id: 4, message: 'Im fine...'}
]

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
           
            <div className={style.dialogItem}>

                <DialogItem name={userData[0].name} id={userData[0].id} />
                <DialogItem name={userData[1].name} id={userData[1].id} />
                <DialogItem name={userData[2].name} id={userData[2].id} />
                <DialogItem name={userData[3].name} id={userData[3].id} />
                <DialogItem name={userData[4].name} id={userData[4].id} />
                <DialogItem name={userData[5].name} id={userData[5].id} />
                <DialogItem name={userData[6].name} id={userData[6].id} />

            </div>
            <div className={style.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;
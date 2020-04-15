import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'
import { updateNewMessageBodyCreator } from '../../redux/state'
import { sendMessageCreator } from '../../redux/state'

const Dialogs = (props) => {
debugger;
let state = props.store.getState().dialogsPage
let dialogElements = state.users.map( d => <DialogItem name={d.name} id={d.id} /> );
let messagesElements = state.messages.map( m => <Message message={m.message} />);
let newMessageBody = state.newMessageBody;


let sendMessage = () => {
  props.store.dispatch(sendMessageCreator())

}

let onNewMessageChange = (e) => {
  let body = e.target.value
  props.store.dispatch(updateNewMessageBodyCreator(body))
}

return(
  <div className={style.dialogs}>
      <div className={style.dialogItem}>
        { dialogElements }
      </div>
      <div className={style.messages}>
        { messagesElements }
        <div>
          <div>
            <textarea placeholder="Enter your message"
            className={style.messageArea}
            onChange={ onNewMessageChange }
            value={ newMessageBody }
          ></textarea>
          </div>
          <div>
            <button className={style.sendButton} onClick={ sendMessage }>Send message</button>
          </div>
      </div>
      </div>
      
    
  </div>
)
}
export default Dialogs;
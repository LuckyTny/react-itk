import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'

const Dialogs = (props) => {

let state = props.dialogsPage;

let dialogElements = state.users.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />);
let newMessageBody = state.newMessageBody;

let onSendMessage = () => {
  props.sendMessage()

}

let onNewMessageChange = (e) => {
  let body = e.target.value
  props.updateNewMessageBody(body)
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
            <button className={style.sendButton} onClick={ onSendMessage }>Send message</button>
          </div>
      </div>
      </div>
      
    
  </div>
)
}
export default Dialogs;
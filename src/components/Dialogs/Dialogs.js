import React from 'react';
import style from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'

const Dialogs = (props) => {
  debugger;
let dialogElements = props.state.users.map( d => <DialogItem name={d.name} id={d.id} /> );
let messagesElements = props.state.messages.map( m => <Message message={m.message} />);

let newMessage = React.createRef()

let sendMessage = () => {
  let messageContent = newMessage.current.value;
  alert(messageContent);
}

return(
  <div className={style.dialogs}>
      <div className={style.dialogItem}>
        { dialogElements }
      </div>
      <div className={style.messages}>
        { messagesElements }
      </div>
      <div>
        <textarea className={style.messageArea} ref={newMessage}></textarea>
        <button className={style.sendButton} onClick={ sendMessage }>Send message</button>
      </div>
    
  </div>
)
}
export default Dialogs;
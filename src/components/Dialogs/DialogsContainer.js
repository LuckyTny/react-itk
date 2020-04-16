import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator ,updateNewMessageBodyCreator } from '../../redux/dialogReducer'

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage



  let onSendMessage = () => {
  props.store.dispatch(sendMessageCreator())

}

let onNewMessageChange = (body) => {
  props.store.dispatch(updateNewMessageBodyCreator(body))
}

return (<Dialogs 
  updateNewMessageBody={onNewMessageChange} 
  sendMessage={onSendMessage}
  dialogsPage={state}
  
  />)
}
export default DialogsContainer;
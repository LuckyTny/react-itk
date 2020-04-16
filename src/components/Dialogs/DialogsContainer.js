import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator ,updateNewMessageBodyCreator } from '../../redux/dialogReducer'
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  

return <StoreContext.Consumer>
  {(store) => {
    let state = store.getState().dialogsPage

    let onSendMessage = () => {
    store.dispatch(sendMessageCreator())
  
    }
  
    let onNewMessageChange = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body))
    }
    return  <Dialogs 
    updateNewMessageBody={onNewMessageChange} 
    sendMessage={onSendMessage}
    dialogsPage={state}
    />
    } 
  }
 
</StoreContext.Consumer>

}
export default DialogsContainer;
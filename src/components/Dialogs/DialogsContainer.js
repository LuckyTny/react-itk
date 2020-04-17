import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator ,updateNewMessageBodyCreator } from '../../redux/dialogReducer'

import { connect } from 'react-redux'

// const DialogsContainer = (props) => {
  

// return <StoreContext.Consumer>
//   {(store) => {
//     let state = store.getState().dialogsPage

//     let onSendMessage = () => {
//     store.dispatch(sendMessageCreator())
  
//     }
  
//     let onNewMessageChange = (body) => {
//     store.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return  <Dialogs 
//     updateNewMessageBody={onNewMessageChange} 
//     sendMessage={onSendMessage}
//     dialogsPage={state}
//     />
//     } 
//   }
 
// </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
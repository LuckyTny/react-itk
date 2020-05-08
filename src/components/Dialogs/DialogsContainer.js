import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator ,updateNewMessageBodyCreator } from '../../redux/dialogReducer'
import AuthRedirect from '../../hoc/AuthRedirect'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

let AuthRedirectComponent = AuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;
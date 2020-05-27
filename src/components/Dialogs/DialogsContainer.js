import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator ,updateNewMessageBodyCreator } from '../../redux/dialogReducer'
import AuthRedirect from '../../hoc/AuthRedirect'
import { connect } from 'react-redux'
import { compose } from 'redux'

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect 
)(Dialogs);


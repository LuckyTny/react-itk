import dashboardReducer from './dashboardReducer'
import dialogReducer from './dialogReducer'
import navbarReducer from './navbarReducer'

const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD_POST'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {

    dashboardPage: {
        posts: [
            {id: 1, post: 'Whats UP!?     @#$%', likesCount: 24},
            {id: 2, post: 'Thats my first post here...', likesCount: 22},
            {id: 3, post: 'To 2010 form 1092', likesCount: 25},
          ], newPostText: 'Whats on your mind?'
    },

    dialogsPage: {
      users: [
        {id: 2314, name:'Gagik'},
        {id: 2315, name:'James'},
        {id: 2316, name:'Richard'},
        {id: 2317, name:'Sukach'},
        {id: 2318, name:'Valera'},
        {id: 2319, name:'Grach'},
        {id: 2321, name:'Natasha'},
      ],

      messages: [
        {id: 1, message: 'Whats UP!?'},
        {id: 2, message: 'Where are you'},
        {id: 3, message: 'How is your day going'},
        {id: 4, message: 'Im fine...'},
      ],
      newMessageBody: ""

      
      },
    navbar: {

      },
    },

  _callSubscriber() {
    console.log('State has been changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.dashboardPage = dashboardReducer(this._state.dashboardPage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);
    this._callSubscriber(this._state);

  }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
  
export const updateNewPostTextActionCreator = (text) => {
  return { 
    type: UPDATE_NEW_POST_TEXT, 
    newText: text 
  }
}

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export default store;
window.store = store;
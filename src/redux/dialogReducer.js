const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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

  
  }

const dialogReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return{
        ...state,
        newMessageBody: action.body
      }
    
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    default: return state;
  }

}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
  })
  
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  })

export default dialogReducer
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, post: 'Whats UP!?     @#$%', likesCount: 24},
        {id: 2, post: 'Thats my first post here...', likesCount: 22},
        {id: 3, post: 'To 2010 form 1092', likesCount: 25},
      ], 
    newPostText: 'Whats on your mind?',
    profile: null
}

const dashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
          let newPost = {id: 4, post: state.newPostText, likesCount: 0}
          return{
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
          }
        }
        case UPDATE_NEW_POST_TEXT:{
          return {
            ...state,
            newPostText: action.newText
          }
        }
        case SET_USER_PROFILE:{
          return {
            ...state, profile: action.profile
          }
        }
        default: return state;

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
  
export const updateNewPostTextActionCreator = (text) => {
  return { 
    type: UPDATE_NEW_POST_TEXT, 
    newText: text 
  }
}

export default dashboardReducer
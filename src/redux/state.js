import {rerenderEntireTree} from '../render'
let state = {

    dashboardPage: {
        posts: [
            {id: 1, post: 'Whats UP!?     @#$%', likesCount: 24},
            {id: 2, post: 'Thats my first post here...', likesCount: 22},
            {id: 3, post: 'To 2010 form 1092', likesCount: 25},
          ], newPostText: 'Whats on your mind?'
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Whats UP!?'},
            {id: 2, message: 'Where are you'},
            {id: 3, message: 'How is your day going'},
            {id: 4, message: 'Im fine...'}
          ],
        users: [
            {id: 2314, name:'Gagik'},
            {id: 2315, name:'James'},
            {id: 2316, name:'Richard'},
            {id: 2317, name:'Sukach'},
            {id: 2318, name:'Valera'},
            {id: 2319, name:'Grach'},
            {id: 2321, name:'Natasha'},]
        
    }
}

export let addPost = (postMessage) => {
  let newPost = {id: 4, post: postMessage, likesCount: 0};
  state.dashboardPage.posts.push(newPost);
  rerenderEntireTree(state)
}

export let updatePostText = (newText) => {
  state.dashboardPage.newPostText = newText;
  rerenderEntireTree(state);
}


export default state;
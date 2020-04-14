
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

  
 

  // addPost() {
    
  //   let newPost = {id: 4, post: this._state.dashboardPage.newPostText, likesCount: 0};
  //   this._state.dashboardPage.posts.push(newPost);
  //   this._state.dashboardPage.newPostText='';
  //   this._callSubscriber(this._state);
  // },

  // updatePostText(newText) {
  //   debugger;
  //   this._state.dashboardPage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {id: 4, post: this._state.dashboardPage.newPostText, likesCount: 0};
      this._state.dashboardPage.posts.push(newPost);
      this._state.dashboardPage.newPostText='';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') { 
      this._state.dashboardPage.newPostText = action.newText;
      this._callSubscriber(this._state);

    }

  }

}


export default store;
window.store = store;
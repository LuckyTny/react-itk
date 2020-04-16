import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/dashboardReducer'

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  
  let addPost = () => {
    // props.addPost()
    props.store.dispatch(addPostActionCreator())
    
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }
  return <MyPosts 
    updateNewPostText={onPostChange}
    addPost={addPost} 
    posts={state.dashboardPage.posts} 
    newPostText={state.dashboardPage.newPostText}
    />
  
}

export default MyPostsContainer;